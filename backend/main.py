from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import json
import random
import os

f = open('data/fretBoard.json', 'r')

fretboard = json.load(f)

app = FastAPI()

# FIXME CORS blocks get request to http://localhost:8000/api/fretboard when using this origins list
# Works fine when using wildcard to allow all origins. No ideal what's going on.
origins = [
    "localhost:8000",
    "localhost:5173",
    "localhost:8000/",
    "localhost:5173/",
    "http://localhost:8000",
    "http://localhost:5173",
    "http://localhost:8000/",
    "http://localhost:5173/",
    "http://localhost:8000/api/fretboard",
    "http://localhost:5173/api/fretboard",
    "http://localhost:8000/api/fretboard/",
    "http://localhost:5173/api/fretboard/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins= "*", # origins, # currently set to wildcard because it wouldn't work otherwise
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dictionary used to convert the randomly selected int to a string for JSON lookup
stringDict = {
    0: "6thString",
    1: "5thString",
    2: "4thString",
    3: "3rdString",
    4: "5thString",
    5: "6thString"
}

@app.get("/")
async def read_root():
    return "Hello World"

@app.get("/api/fretboard/Easy")
async def read_fretboard():
    stringNum = random.randint(0,1)
    randInt = random.randint(0,17)
    return fretboard[stringDict[stringNum]][randInt]

@app.get("/api/fretboard/Medium")
async def read_fretboard():
    stringNum = random.randint(0,3)
    randInt = random.randint(0,17)
    return fretboard[stringDict[stringNum]][randInt]

@app.get("/api/fretboard/Hard")
async def read_fretboard():
    stringNum = random.randint(0,5)
    randInt = random.randint(0,17)
    return fretboard[stringDict[stringNum]][randInt]

@app.get("/api/audio/<wavfile>")
def get_wav_file(wavfilename):
    file_path = "data/audio/" + wavfilename + ".wav"
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type='audio/wav', filename=wavfilename + ".wav")
    else:
        return {"error": "File not found"}

# FIXME this should serve fretboard.json as a static file to avoid the CORS issue but it doesn't
# Possible directory path issue? Test further
app.mount("/data", StaticFiles(directory="data"), name="data")

f.close()