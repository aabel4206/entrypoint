# backend/models.py
from typing import Optional
from sqlmodel import SQLModel, Field

class University(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    website: Optional[str] = None

class Resource(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    category: Optional[str] = None
    description: Optional[str] = None
    link: Optional[str] = None
    university_id: Optional[int] = Field(default=None, foreign_key="university.id")

class ChecklistItem(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: Optional[int] = None
    university_id: Optional[int] = Field(default=None, foreign_key="university.id")
    category: Optional[str] = None
    text: str
    completed: bool = Field(default=False)
