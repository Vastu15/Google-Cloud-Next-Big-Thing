from google.cloud.sql.connector import Connector
import sqlalchemy
import os
from dotenv import load_dotenv, find_dotenv

con = Connector()
env_path = find_dotenv(".env.dev")
load_dotenv(dotenv_path=env_path)
credential_path = os.getenv("GCP_FILE_PATH")
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = credential_path

import google.auth


class UpdateDB:
    def __init__(self):
        credentials, project = google.auth.default()
        # initialize Connector object
        # connector = Connector()
        self.project_id = "agile-skyline-364418"
        self.region = "asia-south2-a"
        self.instance_name = "next-big-thing"

        self.INSTANCE_CONNECTION_NAME = (
            f"{self.project_id}:{self.region}:{self.instance_name}"
        )
        print(f"Your instance connection name is: {self.INSTANCE_CONNECTION_NAME}")
        self.DB_USER = "root"
        self.DB_PASS = "google"
        self.DB_NAME = "school"

        self.pool = sqlalchemy.create_engine(
            "mysql+pymysql://",
            creator=self.getconn,
        )

    # function to return the database connection object
    def getconn(self):
        conn = con.connect(
            self.INSTANCE_CONNECTION_NAME,
            "pymysql",
            user=self.DB_USER,
            password=self.DB_PASS,
            db=self.DB_NAME,
        )
        return conn

    def checkRecordExists(self, usr):
        with self.pool.connect() as db_conn:
            results = db_conn.execute("SELECT * FROM studentsMeta").fetchall()
            for row in results:
                if row[0] == usr:
                    return True
        return False

    def updateStudentsMeta(
        self, usr, mouth, headUp, headDown, headLeft, headRight, emo
    ):
        # create connection pool with 'creator' argument to our connection object function
        with self.pool.connect() as db_conn:
            status = self.checkRecordExists(usr)
            if status:
                sql = "UPDATE studentsMeta SET mouth=%s, headUp=%s, headDown=%s, headLeft=%s, headRight=%s, emo=%s WHERE userName = %s"
                val = (mouth, headUp, headDown, headLeft, headRight, emo, usr)
                db_conn.execute(sql, val)
            else:
                insert_stmt = sqlalchemy.text(
                    "INSERT INTO studentsMeta (userName, mouth, headUp, headDown, headLeft, headRight, emo) VALUES (:userName, :mouth, :headUp, :headDown, :headLeft, :headRight, :emo)",
                )
                db_conn.execute(
                    insert_stmt,
                    userName=usr,
                    mouth=mouth,
                    headUp=headUp,
                    headDown=headDown,
                    headLeft=headLeft,
                    headRight=headRight,
                    emo=emo,
                )

    def getStudentsMeta(self, usr):
        with self.pool.connect() as db_conn:
            sql = "SELECT * FROM studentsMeta WHERE userName = %s"
            val = usr
            results = db_conn.execute(sql, val).fetchall()
        return results
