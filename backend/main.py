from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, select
from typing import List

from .database import engine, init_db  
from .models import University, Resource, ChecklistItem

app = FastAPI(title="EntryPoint Backend (SQLite)")

# Allow calls from your React dev server
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simple root endpoint to test if server is working
@app.get("/")
def root():
    return {"status": "ok"}


@app.on_event("startup")
def on_startup():
     init_db()
     with Session(engine) as session:
         has_unis = session.exec(select(University)).first()
         if not has_unis:
             sample = [
                 University(name="Example University A", website="https://example.edu"),
                 University(name="Example State University", website="https://exstate.edu")
             ]
             session.add_all(sample)
             session.commit()

def get_session():
    with Session(engine) as session:
        yield session

@app.get("/universities", response_model=List[University])
def read_universities(session: Session = Depends(get_session)):
    return session.exec(select(University)).all()

@app.post("/universities", response_model=University)
def create_university(univ: University, session: Session = Depends(get_session)):
    session.add(univ)
    session.commit()
    session.refresh(univ)
    return univ

@app.get("/resources", response_model=List[Resource])
def read_resources(university_id: int = None, session: Session = Depends(get_session)):
    q = select(Resource)
    if university_id:
        q = q.where(Resource.university_id == university_id)
    return session.exec(q).all()

@app.post("/resources", response_model=Resource)
def create_resource(resource: Resource, session: Session = Depends(get_session)):
    session.add(resource)
    session.commit()
    session.refresh(resource)
    return resource

@app.get("/checklist", response_model=List[ChecklistItem])
def get_checklist(university_id: int = None, session: Session = Depends(get_session)):
    q = select(ChecklistItem)
    if university_id:
        q = q.where(ChecklistItem.university_id == university_id)
    return session.exec(q).all()

@app.post("/checklist", response_model=ChecklistItem)
def create_checklist_item(item: ChecklistItem, session: Session = Depends(get_session)):
    session.add(item)
    session.commit()
    session.refresh(item)
    return item

@app.patch("/checklist/{item_id}", response_model=ChecklistItem)
def update_checklist_item(item_id: int, completed: bool, session: Session = Depends(get_session)):
    item = session.get(ChecklistItem, item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    item.completed = completed
    session.add(item)
    session.commit()
    session.refresh(item)
    return item

@app.delete("/checklist/{item_id}")
def delete_checklist_item(item_id: int, session: Session = Depends(get_session)):
    item = session.get(ChecklistItem, item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    session.delete(item)
    session.commit()
    return {"ok": True}
