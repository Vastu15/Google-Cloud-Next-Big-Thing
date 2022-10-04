
import google.cloud.sql.connector as con
import sqlalchemy
import os
import uvicorn
os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="C:\\Users\\91953\\Downloads\\agile-skyline-364418-20bcfb524531.json"
import google.auth
from fastapi import FastAPI, Form, File, BackgroundTasks
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.cors import CORSMiddleware

app = FastAPI(debug=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
)


credentials, project = google.auth.default()
# initialize Connector object
# connector = Connector()
project_id = "agile-skyline-364418"
region = "asia-south2-a"
instance_name = "next-big-thing" 

INSTANCE_CONNECTION_NAME = f"{project_id}:{region}:{instance_name}" # i.e demo-project:us-central1:demo-instance
print(f"Your instance connection name is: {INSTANCE_CONNECTION_NAME}")
DB_USER = "root"
DB_PASS = "google"
DB_NAME = "school"

# function to return the database connection object
def getconn():
    conn = con.connect(
        INSTANCE_CONNECTION_NAME,
        "pymysql",
        user=DB_USER,
        password=DB_PASS,
        db=DB_NAME
    )
    return conn

# create connection pool with 'creator' argument to our connection object function
pool = sqlalchemy.create_engine(
    "mysql+pymysql://",
    creator=getconn,
)


@app.get("/")
def read_root():
    return {"Hello": "Welcome to the next BIG DB!"}

@app.post("/update/studentsMeta")
async def upload(background_tasks: BackgroundTasks, userName: str = Form(...), mouth: str = Form(...), headUp: str = Form(...), headDown: str = Form(...), headLeft: str = Form(...), headRight: str = Form(...), emo: str = Form(...), classId: str = Form(...)):
    print(UID)
    background_tasks.add_task(saveImage, UID=UID, imageData=imageData)


with pool.connect() as db_conn:
    results = db_conn.execute("show tables").fetchall()

print(results)

if __name__ == '__main__':
    uvicorn.run("main:app", host="127.0.0.1", port=8001, reload=True, debug=True)
