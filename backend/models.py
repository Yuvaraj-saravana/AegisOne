from sqlalchemy import Column, Integer, String, DateTime, Float, JSON
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
    source = Column(String, default="Manual")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

class Vulnerability(Base):
    __tablename__ = "vulnerabilities"

    id = Column(Integer, primary_key=True, index=True)
    vuln_id = Column(String, unique=True, index=True)
    title = Column(String)
    severity = Column(String)
    asset = Column(String)
    status = Column(String, default="Open")
    exploitability = Column(String)
    discovered = Column(DateTime, default=datetime.datetime.utcnow)
    remediation = Column(String)
    cvss = Column(Float)
    riskScore = Column(Integer)
    description = Column(String)
    remediationNotes = Column(JSON, default=list)

class Threat(Base):
    __tablename__ = "threats"

    id = Column(Integer, primary_key=True, index=True)
    threat_id = Column(String, unique=True, index=True)
    value = Column(String)
    type = Column(String)
    severity = Column(String)
    confidence = Column(String)
    source = Column(String)
    status = Column(String, default="Active")
    tags = Column(JSON, default=list)
    firstSeen = Column(DateTime, default=datetime.datetime.utcnow)
    lastSeen = Column(DateTime, default=datetime.datetime.utcnow)
    enrichment = Column(JSON, default=dict)
    notes = Column(JSON, default=list)
