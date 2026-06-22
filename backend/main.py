from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional
import datetime

import models
from database import engine, SessionLocal

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="SecurityOps Unified API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Pydantic schemas
class UserCreate(BaseModel):
    name: str
    email: str
    password: str
    role: str
    department: str
    status: str

class UserResponse(BaseModel):
    user_id: str
    name: str
    email: str
    role: str
    department: str
    status: str
    last_login: Optional[datetime.datetime] = None

    class Config:
        from_attributes = True

class TicketCreate(BaseModel):
    title: str
    description: str
    severity: str
    category: str

class TicketResponse(BaseModel):
    ticket_id: str
    title: str
    description: str
    severity: str
    status: str
    assigned_to: Optional[str] = None
    category: str
    created_at: datetime.datetime
    updated_at: datetime.datetime

    class Config:
        from_attributes = True

class LoginRequest(BaseModel):
    email: str
    password: str

@app.get("/health")
def health_check():
    return {"status": "ok", "message": "Backend is running"}

# User Routes
@app.post("/users", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Generate user_id
    count = db.query(models.User).count()
    new_user_id = f"USR-{count + 1:03d}"
    
    db_user = models.User(
        user_id=new_user_id,
        name=user.name,
        email=user.email,
        password=user.password,
        role=user.role,
        department=user.department,
        status=user.status
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/users", response_model=List[UserResponse])
def get_users(db: Session = Depends(get_db)):
    return db.query(models.User).all()

@app.put("/users/{user_id}/status")
def toggle_user_status(user_id: str, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.user_id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    
    db_user.status = "Disabled" if db_user.status == "Active" else "Active"
    db.commit()
    return {"status": "success", "new_status": db_user.status}

@app.put("/users/{user_id}", response_model=UserResponse)
def update_user(user_id: str, user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.user_id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    
    db_user.name = user.name
    db_user.email = user.email
    db_user.password = user.password
    db_user.role = user.role
    db_user.department = user.department
    db_user.status = user.status
    
    db.commit()
    db.refresh(db_user)
    return db_user

@app.post("/login")
def login(req: LoginRequest, db: Session = Depends(get_db)):
    # Master admin bypass
    if req.email == "admin@gmail.com" and req.password == "123":
        return {
            "user_id": "ADMIN-001",
            "name": "Admin User",
            "email": "admin@gmail.com",
            "role": "Admin",
            "department": "Global",
            "status": "Active"
        }
        
    user = db.query(models.User).filter(models.User.email == req.email, models.User.password == req.password).first()
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    if user.status != "Active":
        raise HTTPException(status_code=403, detail="Account is disabled")
        
    user.last_login = datetime.datetime.utcnow()
    db.commit()
    
    return {
        "user_id": user.user_id,
        "name": user.name,
        "email": user.email,
        "role": user.role,
        "department": user.department,
        "status": user.status
    }

# Ticket Routes
@app.post("/tickets", response_model=TicketResponse)
def create_ticket(ticket: TicketCreate, db: Session = Depends(get_db)):
    count = db.query(models.Ticket).count()
    new_ticket_id = f"TKT-{1000 + count + 1}"
    
    db_ticket = models.Ticket(
        ticket_id=new_ticket_id,
        title=ticket.title,
        description=ticket.description,
        severity=ticket.severity,
        category=ticket.category
    )
    db.add(db_ticket)
    db.commit()
    db.refresh(db_ticket)
    return db_ticket

@app.get("/tickets", response_model=List[TicketResponse])
def get_tickets(db: Session = Depends(get_db)):
    return db.query(models.Ticket).order_by(models.Ticket.created_at.desc()).all()

@app.put("/tickets/{ticket_id}/assign")
def assign_ticket(ticket_id: str, assigned_to: str, db: Session = Depends(get_db)):
    db_ticket = db.query(models.Ticket).filter(models.Ticket.ticket_id == ticket_id).first()
    if not db_ticket:
        raise HTTPException(status_code=404, detail="Ticket not found")
    
    db_ticket.assigned_to = assigned_to
    db.commit()
    return {"status": "success", "assigned_to": assigned_to}
