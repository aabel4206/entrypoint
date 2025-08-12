# backend/database.py
from sqlmodel import create_engine, SQLModel

DATABASE_URL = "sqlite:///./app.db"   # file app.db created in backend/
engine = create_engine(DATABASE_URL, echo=True)  # echo=True prints SQL to console

def init_db():
    # Creates tables based on SQLModel models
    SQLModel.metadata.create_all(engine)
