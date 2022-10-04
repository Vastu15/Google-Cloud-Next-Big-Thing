import uvicorn
from fastapi import FastAPI, Form, File, BackgroundTasks
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.cors import CORSMiddleware
from db import UpdateDB

app = FastAPI(debug=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
)

DB = UpdateDB()

@app.get("/")
def read_root():
    return {"Hello": "Welcome to the next BIG DB!"}

@app.post("/update/studentsMeta")
async def upload(userName: str = Form(...), mouth: str = Form(...), headUp: str = Form(...), headDown: str = Form(...), headLeft: str = Form(...), headRight: str = Form(...), emo: str = Form(...), classId: str = Form(...)):
    DB.updateStudentsMeta(userName, mouth, headUp, headDown, headLeft, headRight, emo, classId)

@app.get("/fetch/getStudentsMeta/{userName}")
async def getData(userName: str):
    return (DB.getStudentsMeta(userName))

if __name__ == '__main__':
    uvicorn.run("dbRoutes:app", host="127.0.0.1", port=8001, reload=True, debug=True)
