# An app to help me practice guitar

# import customtkinter
import random
import time

# TODO Goal 1 - given a sequence of notes, display them one at a time in order
# TODO Goal 2 - adjustable difficulty level that changes the speed at which the next note is displayed
# TODO Goal 3 - ?

# Data Structures
fretboard = [['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A']]

class App():
    
    def genSequence(self, strings):
        sequence = []
        while len(sequence) < 9:
            string = random.choice(strings)
            note = fretboard[string][random.randrange(len(fretboard[string]))]
            sequence.append(note)
        return sequence

    def run(self):
        strings = [int(input("Enter strings to practice: "))]
        print(strings)
        sequence = self.genSequence(strings)
        for note in sequence:
            print(note)
            time.sleep(3)
        print('Sequence complete.')

app = App()
app.run()