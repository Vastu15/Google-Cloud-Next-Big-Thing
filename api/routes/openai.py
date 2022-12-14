from dataclasses import dataclass
from typing import List, Optional

from fastapi import APIRouter
from fastapi.responses import FileResponse
from fastapi.params import Form
import openai
import os
from pathlib import Path
 
openai.api_key = "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"

openai_api_router = APIRouter(prefix="/openai/v1", tags=["OpenAI Functions"])


@openai_api_router.post("/text_summarizer")
def get_text_summarizer(text: str = Form(...)):
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="Many individual performance improvements landed in Python 3.11, but the single biggest addition is the specializing adaptive interpreter. Since an object's type rarely changes, the interpreter now attempts to analyze running code and replace general bytecodes with type-specific ones. For instance, binary operations (add, subtract, etc.) can be replaced with specialized versions for integers, floats, and strings.\n\nPython function calls also require less overhead in Python 3.11. Stack frames for function calls now use less memory and are more efficiently designed. Also, while recursive calls aren't tail-optimized (which probably isn't possible in Python, anyway), they are more efficient than in previous versions. The Python interpreter itself also starts faster, and core modules needed for the Python runtime are stored and loaded more efficiently.\n ",
        temperature=0.7,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0,
    )
    return {"summary": response.choices[0].text}


@openai_api_router.post("/grammer_corrector")
def grammer_corrector(text: str = Form(...)):
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt=f"Correct this to standard English:\n\n{text}",
        temperature=0,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0,
    )
    return {"corrected_text": response.choices[0].text}


@openai_api_router.post("/explain_code")
def explain_code(text: str = Form(...)):
    response = openai.Completion.create(
        model="text-curie-001",
        prompt='class Log:\n    def __init__(self, path):\n        dirname = os.path.dirname(path)\n        os.makedirs(dirname, exist_ok=True)\n        f = open(path, "a+")\n\n        # Check that the file is newline-terminated\n        size = os.path.getsize(path)\n        if size > 0:\n            f.seek(size - 1)\n            end = f.read(1)\n            if end != "\\n":\n                f.write("\\n")\n        self.f = f\n        self.path = path\n\n    def log(self, event):\n        event["_event_id"] = str(uuid.uuid4())\n        json.dump(event, self.f)\n        self.f.write("\\n")\n\n    def state(self):\n        state = {"complete": set(), "last": None}\n        for line in open(self.path):\n            event = json.loads(line)\n            if event["type"] == "submit" and event["success"]:\n                state["complete"].add(event["id"])\n                state["last"] = event\n        return state\n\n"""\nHere\'s what the above class is doing:\n1.',
        temperature=0,
        max_tokens=64,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0,
        stop=['"""'],
    )
    return {"explanation": response.choices[0].text}


@openai_api_router.post("/sql_translate")
def sql_translate(text: str = Form(...)):
    response = openai.Completion.create(
        model="curie",
        prompt="### Postgres SQL tables, with their properties:\n#\n# Employee(id, name, department_id)\n# Department(id, name, address)\n# Salary_Payments(id, employee_id, amount, date)\n#\n### A query to list the names of the departments which employed more than 10 employees in the last 3 months\nSELECT",
        max_tokens=64,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0,
        stop=['"""'],
    )
    return {"translation": response.choices[0].text}
