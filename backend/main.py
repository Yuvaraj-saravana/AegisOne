from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional, Any, Dict
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
    source: Optional[str] = "Manual"
    status: Optional[str] = "New"
    assigned_to: Optional[str] = None

class TicketResponse(BaseModel):
    ticket_id: str
    title: str
    description: str
    severity: str
    status: str
    source: str
    assigned_to: Optional[str] = None
    category: str
    created_at: datetime.datetime
    updated_at: datetime.datetime

    class Config:
        from_attributes = True

class VulnResponse(BaseModel):
    id: int
    vuln_id: str
    title: str
    severity: str
    asset: str
    status: str
    exploitability: str
    discovered: datetime.datetime
    remediation: str
    cvss: float
    riskScore: int
    description: str
    remediationNotes: List[Any]

    class Config:
        from_attributes = True

class ThreatResponse(BaseModel):
    id: int
    threat_id: str
    value: str
    type: str
    severity: str
    confidence: str
    source: str
    status: str
    tags: List[str]
    firstSeen: datetime.datetime
    lastSeen: datetime.datetime
    enrichment: Dict[str, Any]
    notes: List[Any]

    class Config:
        from_attributes = True

class LoginRequest(BaseModel):
    email: str
    password: str

@app.on_event("startup")
def seed_db():
    db = SessionLocal()
    # Seed vulnerabilities
    if db.query(models.Vulnerability).count() == 0:
        vulns = [
            models.Vulnerability(vuln_id='CVE-2023-44487', title='HTTP/2 Rapid Reset Attack', severity='Critical', asset='web-prod-01', status='Open', exploitability='High', discovered=datetime.datetime(2023, 10, 10, 8, 0, 0), remediation='Pending Patch', cvss=9.8, riskScore=98, description='The HTTP/2 protocol allows a denial of service (server resource consumption) because request cancellation can reset many streams quickly.', remediationNotes=[]),
            models.Vulnerability(vuln_id='CVE-2021-44228', title='Log4Shell in Authentication Service', severity='Critical', asset='auth-svc-cluster', status='In Progress', exploitability='High', discovered=datetime.datetime(2021, 12, 10, 14, 30, 0), remediation='Patching', cvss=10.0, riskScore=100, description='Apache Log4j2 JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints.', remediationNotes=[{'date': '2021-12-11T09:00:00Z', 'note': 'Applying patch 2.15.0', 'author': 'System'}]),
            models.Vulnerability(vuln_id='VULN-INTERNAL-092', title='Outdated Nginx Version', severity='Medium', asset='proxy-gateway', status='Open', exploitability='Low', discovered=datetime.datetime(2024, 2, 15, 11, 20, 0), remediation='Scheduled Maintenance', cvss=5.3, riskScore=45, description='Nginx version 1.18.0 is running, which is missing several security updates. Recommend upgrading to 1.24.0.', remediationNotes=[]),
            models.Vulnerability(vuln_id='CVE-2024-3094', title='XZ Utils Backdoor', severity='High', asset='db-backup-server', status='Resolved', exploitability='Medium', discovered=datetime.datetime(2024, 3, 29, 10, 0, 0), remediation='Downgraded Package', cvss=10.0, riskScore=85, description='Malicious code was discovered in the upstream tarballs of xz, starting with version 5.6.0.', remediationNotes=[{'date': '2024-03-30T10:00:00Z', 'note': 'Downgraded xz to 5.4.6', 'author': 'Security Team'}])
        ]
        db.add_all(vulns)
        db.commit()

    # Seed threats
    if db.query(models.Threat).count() == 0:
        threats = [
            models.Threat(threat_id='IOC-84920', value='185.15.58.22', type='IP Address', severity='Critical', confidence='High', source='AlienVault OTX', status='Active', tags=['botnet', 'c2'], firstSeen=datetime.datetime(2024, 5, 10, 8, 0, 0), lastSeen=datetime.datetime(2024, 5, 15, 12, 0, 0), enrichment={'location': 'Russia', 'asn': 'AS20860', 'rep': 'Malicious'}, notes=[]),
            models.Threat(threat_id='IOC-84921', value='login-secure-update.com', type='Domain', severity='High', confidence='Medium', source='Internal Honeypot', status='Active', tags=['phishing', 'credential-harvesting'], firstSeen=datetime.datetime(2024, 5, 14, 9, 30, 0), lastSeen=datetime.datetime(2024, 5, 14, 9, 30, 0), enrichment={'registrar': 'NameCheap', 'created': '2024-05-13', 'rep': 'Suspicious'}, notes=[{'date': '2024-05-14T10:00:00Z', 'note': 'Blocked on edge firewall.', 'author': 'System'}]),
            models.Threat(threat_id='IOC-84922', value='9a2a7f5a9fe1c...', type='Hash', severity='High', confidence='High', source='VirusTotal API', status='Investigating', tags=['ransomware', 'lockbit'], firstSeen=datetime.datetime(2024, 5, 12, 14, 20, 0), lastSeen=datetime.datetime(2024, 5, 15, 9, 0, 0), enrichment={'family': 'LockBit 3.0', 'vt_score': '58/72', 'file_type': 'Win32 EXE'}, notes=[]),
            models.Threat(threat_id='IOC-84923', value='MuddyWater Campaign', type='Campaign', severity='Critical', confidence='Low', source='Mandiant', status='Inactive', tags=['apt', 'espionage'], firstSeen=datetime.datetime(2023, 11, 1, 0, 0, 0), lastSeen=datetime.datetime(2024, 1, 15, 0, 0, 0), enrichment={'target_sectors': 'Telecomm, Government', 'actor': 'MuddyWater'}, notes=[])
        ]
        db.add_all(threats)
        db.commit()
    db.close()


@app.get("/health")
def health_check():
    return {"status": "ok", "message": "Backend is running"}

# User Routes
@app.post("/users", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
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
    if user.password:  
        db_user.password = user.password
    db_user.role = user.role
    db_user.department = user.department
    db_user.status = user.status
    
    db.commit()
    db.refresh(db_user)
    return db_user

@app.post("/login")
def login(req: LoginRequest, db: Session = Depends(get_db)):
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
        category=ticket.category,
        source=ticket.source,
        status=ticket.status,
        assigned_to=ticket.assigned_to if ticket.assigned_to else None
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

@app.get("/vulnerabilities", response_model=List[VulnResponse])
def get_vulnerabilities(db: Session = Depends(get_db)):
    return db.query(models.Vulnerability).order_by(models.Vulnerability.discovered.desc()).all()

@app.get("/threats", response_model=List[ThreatResponse])
def get_threats(db: Session = Depends(get_db)):
    return db.query(models.Threat).order_by(models.Threat.lastSeen.desc()).all()
