import google.cloud.sql.connector as con
import sqlalchemy
import os
os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="C:\\Users\\91953\\Downloads\\agile-skyline-364418-20bcfb524531.json"
import google.auth

class UpdateDB:
    def __init__(self):
        credentials, project = google.auth.default()
        # initialize Connector object
        # connector = Connector()
        self.project_id = "agile-skyline-364418"
        self.region = "asia-south2-a"
        self.instance_name = "next-big-thing" 

        self.INSTANCE_CONNECTION_NAME = f"{self.project_id}:{self.region}:{self.instance_name}"
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
            db=self.DB_NAME
        )
        return conn

    def checkRecordExists(self, usr):
        with self.pool.connect() as db_conn:
            results = db_conn.execute("SELECT * FROM studentsMeta").fetchall()
            for row in results:
                if (row[0] == usr):
                    return(True)
        return(False)

    def updateStudentsMeta(self, usr, mouth, headUp, headDown, headLeft, headRight, emo, classId):
        # create connection pool with 'creator' argument to our connection object function
        with self.pool.connect() as db_conn:
            status = self.checkRecordExists(usr)
            if status:
                sql = "UPDATE studentsMeta SET mouth=%s, headUp=%s, headDown=%s, headLeft=%s, headRight=%s, emo=%s, classID=%s WHERE userName = %s"
                val = (mouth, headUp, headDown, headLeft, headRight, emo, classId, usr)
                db_conn.execute(sql, val)
            else:
                insert_stmt = sqlalchemy.text(
                    "INSERT INTO studentsMeta (userName, mouth, headUp, headDown, headLeft, headRight, emo, classID) VALUES (:userName, :mouth, :headUp, :headDown, :headLeft, :headRight, :emo, :classID)",
                )
                db_conn.execute(insert_stmt, userName=usr, mouth=mouth, headUp=headUp, headDown=headDown, headLeft=headLeft, headRight=headRight, emo=emo, classID=classId)

    def getStudentsMeta(self, usr):
        with self.pool.connect() as db_conn:
            sql = "SELECT * FROM studentsMeta WHERE userName = %s"
            val = (usr)
            results = db_conn.execute(sql, val).fetchall()
        return results