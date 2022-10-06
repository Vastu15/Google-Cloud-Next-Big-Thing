# Google-Cloud-Next-Big-Thing
This repo is created for project submitted in Google Cloud Next Big Thing Hackathon. Please find the presentation [here](https://www.canva.com/design/DAFNPTHo0fQ/lTgcJJx9yIUcJwjzleDDfA/edit?utm_content=DAFNPTHo0fQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Vidya [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) [![Python 3.7](https://img.shields.io/badge/Python-3.7-3776AB)](https://www.python.org/downloads/release/python-370/)
Making Education Accessible, Smarter & Stress free. Vidya is complete student mnagement platform that focuses on providing best in class platform
with added intelligence that continuously monitors mental health issues among students at an early stage using AI by monitoring parameters like      attentiveness, emotional state, academic performance during classes so that they can receive appropriate care on time. Checkout [youtube video](https://www.youtube.com/watch?v=9irTaI7YtQ8) for more information).
                  
[![Alt text](https://img.youtube.com/vi/9irTaI7YtQ8/0.jpg)](https://www.youtube.com/watch?v=9irTaI7YtQ8)
## Note

Please find the credentials to use the dashboard hosted at [Vidya Dashboard](https://vidya-next.netlify.app/) below:-
- Teacher 
```Username - teacher@gmail.com```
```Password - teacher@123```
- Student
```Username - student@gmail.com```
```Password - student@123```

## Features:

- AI based online classroom system
- Multiple AI based solutions to help students with different tasks like understanding existing codes, summary extractor to get easy understanding of lessons etc.
- AI powered chatbot to help students find resources esily.
- Combining different models of summary extractor, text to speech and deep fake to help teacher create explanation videos for different chapters by just uploading text files of chapters.
- Detecting emotion levels and connecting counsellors
- Pose estimnation and eye tracking models for calculating the attentiveness during the class.


## Routes
Api backend is hosted on compute instance on GCP [Vidya Backend](http://35.224.123.197/docs) and contains following routes :
- Frame Upload(To send frames from webcam to ML models for inference)

- GCP functions(Different GCP API like spech-to-text)

- Open AI(Ml models like text extractor, grammer correction, code understanding etc.)

- DB router(DB access)

<img src="screenshots/Screenshot 2022-10-06 at 6.02.55 PM.png">

## Instructions to run application:

  1. Create a python 3.7 virtual environment and proceeed with installation there:
  
  2. Clone this repository cd to folder and install the modules in requirements.txt and run
       ```pip install -r requirements.txt.```

  3. To run this project, Open command prompt type 

  4. Type ```python main.py``` to run the application backend.
  
  5. You can see the backend Live at  http://127.0.0.1:8000/
  
  6. To run the Frontend use ```npm start```.

## Motivation for the project:

The past 2 years of the pandemic have had a very significant impact on our lives both in terms of our physical and mental well-being. Research states that the depression rates in students between ages 10-18 have increased by 72% since the pandemic has started. Therefore to fix this issue, we have created an AI-based online classroom system that monitors various parameters like facial expressions, voice, attentiveness of a student during the class and generates a meta score that gives an overall idea about the mental well-being of the student. Based on this score, the school counselors will be notified and then the student can have a one on one therapy session with the counselor. This system can help identify signs of depression at early stages which makes it significantly easy to help the student in a safe environment. 


## Tech stack and Modules used:

        React , FastAPI , Python , NLP ,TensorFlow , OpenCV , Keras, Open AI, GCP Cloud, SQL, Node.js
        
        
## AI based monitoring processes:

  Using an artificial intelligence model. The proposed scheme tracks emotions such as happy,sad,tensed,scared 
  and head,eye,mouth movements, which can be converted into a meta-score based on predefined threshold values 
  selected by the authority who conducts the assessment. The thresholds for the two parameters can be adjusted independently, avoiding false results.

## Helping Hand AI

  Using Helping Hand AI we make it easy for both teacher and students. Features like automatic explanation video creation with chapter pdf helps teacher create explanation videos for students with just one click. 
  
## Overview of Website:

 
<img src="ss/Screenshot 2022-10-06 at 3.23.22 PM.png">
<img src="ss/Screenshot 2022-10-06 at 3.23.36 PM.png">
<img src="ss/Screenshot 2022-10-06 at 3.23.46 PM.png">
<img src="ss/Screenshot 2022-10-06 at 3.23.54 PM.png">
<img src="ss/Screenshot 2022-10-06 at 3.24.14 PM.png">
<img src="ss/Screenshot 2022-10-06 at 3.24.30 PM.png">
<img src="ss/Screenshot 2022-10-06 at 3.24.59 PM.png">
<img src="ss/Screenshot 2022-10-06 at 3.25.15 PM.png">
<img src="ss/Screenshot 2022-10-06 at 3.25.21 PM.png">

