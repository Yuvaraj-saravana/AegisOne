from sqlalchemy import Column, Integer, String, DateTime
from database import Base
import datetime

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, unique=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    password = Column(String) # Stored in plaintext for demo only, use hashing in prod
    role = Column(String)
    department = Column(String)
    status = Column(String, default="Active")
    last_login = Column(DateTime, nullable=True)

class Ticket(Base):
    __tablename__ = "tickets"

    id = Column(Integer, primary_key=True, index=True)
    ticket_id = Column(String, unique=True, index=True)
    title = Column(String)
    description = Column(String)
    severity = Column(String)
    status = Column(String, default="New")
    assigned_to = Column(String, nullable=True)
    category = Column(String)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)
