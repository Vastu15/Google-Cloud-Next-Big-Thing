import os
from importlib import reload
import base64
import numpy as np
import requests
from PIL import Image 
from io import BytesIO

import uvicorn
from fastapi import FastAPI, Form, File, UploadFile, BackgroundTasks
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.cors import CORSMiddleware


app = FastAPI(debug=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000/upload", "http://127.0.0.1:5500"],
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "Welcome to the next BIG Thing!"}

@app.post("/upload")
async def upload(background_tasks: BackgroundTasks, imageData: bytes = File(...), UID: str = Form(...)):
    background_tasks.add_task(saveImage, UID=UID, imageData=imageData)
    # return {"message": "Success"} 
    # try:
    #     with open(UID+".jpg", 'wb') as f:
    #         f.write(imageData)
    # except Exception as e:
    #     print(e)
   
def saveImage(UID, imageData):
    try:
        with open(UID+".jpg", 'wb') as f:
            f.write(imageData)

    except Exception as e:
        print(e)
if __name__ == '__main__':
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True, debug=True)
