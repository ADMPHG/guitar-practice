# An app to help me practice guitar

# import customtkinter
import random
import time

# COMPLETE Goal 1 - given a string, display notes from the string randomly one at a time
# COMPLETE Goal 2 - adjustable difficulty level that changes the string selection and speed at which the next note is displayed
# TODO Goal 3 - gui
# TODO Goal 4 - custom difficulty settings

### How it works
# - user is prompted to enter a difficulty setting from 1-3
# - the higher the number, the more strings are used to produce the random sequence of notes
# - currently, the time until the next note is displayed is determined by the difficulty setting

# Data Structures
fretboard = [['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E (12th fret)', 'F (>12th fret)', 'F# (>12th fret)', 'G (>12th fret)', 'G# (>12th fret)', 'A (>12th fret)'],
             ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A (12th fret)', 'A# (>12th fret)', 'B (>12th fret)', 'C (>12th fret)', 'C# (>12th fret)', 'D (>12th fret)'],
             ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D (12th fret)', 'D# (>12th fret)', 'E (>12th fret)', 'F (>12th fret)', 'F# (>12th fret)', 'G (>12th fret)'],
             ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G (12th fret)', 'G# (>12th fret)', 'A (>12th fret)', 'A# (>12th fret)', 'B (>12th fret)', 'C (>12th fret)'],
             ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B (12th fret)', 'C (>12th fret)', 'C# (>12th fret)', 'D (>12th fret)', 'D# (>12th fret)', 'E (>12th fret)'],
             ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E (12th fret)', 'F (>12th fret)', 'F# (>12th fret)', 'G (>12th fret)', 'G# (>12th fret)', 'A (>12th fret)']
             ]
stringCodes = ['E', 'A', 'D', 'G', 'B', 'E (High)']

class App():
    def selectDifficulty(self, difficulty):
        strings = seqLength = pauseTime = 0
        match difficulty:
            case '1':
                strings = [0, 1]
                seqLength = 10
                pauseTime = 5
            case '2':
                strings = [0, 1, 2, 3]
                seqLength = 20
                pauseTime = 4
            case '3':
                strings = [0, 1, 2, 3, 4, 5]
                seqLength = 30
                pauseTime = 3
            case _:
                print('Please enter a valid difficulty setting.')
        
        return strings, seqLength, pauseTime
    
    def genSequence(self, strings, seqLength):
        sequence = []
        while len(sequence) < seqLength:
            string = random.choice(strings)
            note = fretboard[string][random.randrange(len(fretboard[string]))]
            sequence.append([string, note])
        return sequence

    def run(self):
        difficulty = input("Select Difficulty (Easy - 1, Medium - 2, Hard - 3): ")
        strings, seqLength, pauseTime = self.selectDifficulty(difficulty)
        print(strings)
        sequence = self.genSequence(strings, seqLength)
        for note in sequence:
            print(f'{stringCodes[note[0]]} string, {note[1]}')
            time.sleep(pauseTime)
        print('Sequence complete.')

app = App()
app.run()