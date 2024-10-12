from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import json
import random

f = open('data/fretBoard.json')

fretboard = json.load(f)

app = FastAPI()

# FIXME CORS blocks get request to http://localhost:8000/api/fretboard when using this origins list.
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
    allow_origins= "*", # origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return "Hello World"

@app.get("/api/fretboard")
async def read_fretboard():
    randInt = random.randint(0,17)
    return fretboard['fretboard'][randInt]['note']

# @app.get("/api/notes/easy")
# async def root():
#     return

# FIXME this should serve fretboard.json as a static file to avoid the CORS issue but it doesn't
# Possible directory path issue? Test further
app.mount("/data", StaticFiles(directory="data"), name="data")

f.close()