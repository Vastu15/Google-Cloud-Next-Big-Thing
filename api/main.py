import os
from importlib import reload
import base64
import numpy as np
import requests
from PIL import Image 
from io import BytesIO
import cv2
import uvicorn
from fastapi import FastAPI, Form, File, BackgroundTasks
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.cors import CORSMiddleware
from ml_backend.camera import Detect
import json
app = FastAPI(debug=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000/upload", "http://127.0.0.1:5500"],
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
)

detect_img=Detect()
 
@app.get("/")
def read_root():
    return {"Hello": "Welcome to the next BIG Thing!"}

@app.post("/upload")
async def upload(background_tasks: BackgroundTasks, imageData: bytes = File(...), UID: str = Form(...)):
    print(UID)
    background_tasks.add_task(saveImage, UID=UID, imageData=imageData)

@app.post("/signal")
async def signal( UID: str = Form(...)):
    print(UID)
    with open('data.json', 'r') as openfile:
            data = json.load(openfile)
            print(data[UID])
    
 
def saveImage(UID, imageData):
        
    try:
        with open(UID+".jpg", 'wb') as f:
            f.write(imageData)
        nm=UID+".jpg"
        nmm=cv2.imread(nm)
        ml_data=(detect_img.get_frame(nmm))
        print(ml_data)
        with open('data.json', 'r') as openfile:
            data = json.load(openfile)
            if data=={} :
                data={
                    UID:
                        {'mouth': "", 
                        'head_up': "", 
                        'head_dwn': "",
                        'head_left': "",
                        'head_right': "",
                        'emo':""}}
            elif UID not in data:
                data[UID]={'mouth': "", 
                        'head_up': "", 
                        'head_dwn': "",
                        'head_left': "",
                        'head_right': "",
                        'emo': ""}
               
            for i in data[UID]:
                    if i=="emo" and ml_data["emo"]!=[]:
                        data[UID][i]+=str(ml_data[i][0])+","
                    elif i!="emo" and ml_data[i]!=0:
                        data[UID][i]+=str(ml_data[i])+","
         
            
        with open("data.json", "w") as outfile:
            json.dump(data, outfile)     
        print("done")
    except Exception as e:
        print(e)
if __name__ == '__main__':
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True, debug=True)
