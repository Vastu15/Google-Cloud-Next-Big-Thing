import uvicorn
from fastapi import FastAPI, Form, File, BackgroundTasks
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.cors import CORSMiddleware
from api.db import db
from dataclasses import dataclass
from typing import List, Optional

from fastapi import APIRouter
from fastapi.responses import FileResponse
from fastapi.params import Form

from api.utils import gcp_utils

db_router = APIRouter(prefix="/db/v1", tags=["DB Router"])

DB = db.UpdateDB()


@db_router.post("/update/studentsMeta")
async def upload(
    userName: str = Form(...),
    mouth: str = Form(...),
    headUp: str = Form(...),
    headDown: str = Form(...),
    headLeft: str = Form(...),
    headRight: str = Form(...),
    emo: str = Form(...),
    classId: str = Form(...),
):
    DB.updateStudentsMeta(
        userName, mouth, headUp, headDown, headLeft, headRight, emo, classId
    )


@db_router.get("/fetch/getStudentsMeta/{userName}")
async def getData(userName: str):
    return DB.getStudentsMeta(userName)
