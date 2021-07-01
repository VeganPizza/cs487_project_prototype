import json
import numpy as np
import pandas as pd

import os
script_dir = os.path.dirname(__file__)
file_path = os.path.join(script_dir, 'userdata/users.json')
with open(file_path, 'r') as f:
    data = json.load(f)

#f = open('users.json')

data = np.array(data)
f.close()


def look_up_user(usr, psswrd): # TODO: Update this to use the new data structues
    valid = False
    for d in data:
        if d["username"] == usr and d["password"] == psswrd:
            valid = True
            return valid
        else:
            valid = False
    return valid


def login(usr, psswrd):
    return look_up_user(usr, psswrd)


def edit_username(usr, psswrd, new_usrname): # TODO: Update this to use the new data structures
    valid = look_up_user(usr, psswrd)
    if valid:
        for d in data:
            if d["username"] == usr and d["password"] == psswrd:
                d["username"] = new_usrname
        return True
    else:
        return False


def edit_password(usr, psswrd, confirm_psswrd, new_psswrd): # TODO: Update this to use the new data structures
    valid = look_up_user(usr, psswrd)
    if valid:
        for d in data:
            if d["username"] == usr and d["password"] == psswrd and d["password"] == confirm_psswrd:
                d["psswrd"] = new_psswrd
        return True
    else:
        return False


# Data Structure Code
data_folder = "../data"

users = pd.DataFrame(columns=["username", "password", "isStudent", "isTeacher"]).set_index("username")
classes = pd.DataFrame(columns=["id", "name", "teachers", "students", "quizzes"]).set_index("id")
quizzes = pd.DataFrame(columns=["id", "name", "questions", "submissions"]).set_index("id")
questions = pd.DataFrame(columns=["id", "prompt", "answers", "ansIndex"]).set_index("id")

def loadAll(): # Loads every dataframe from the data folder
  global users, classes, quizzes, questions
  users = pd.read_csv(data_folder + "/users.csv")
  classes = pd.read_csv(data_folder + "/classes.csv")
  quizzes = pd.read_csv(data_folder + "/quizzes.csv")
  questions = pd.read_csv(data_folder + "/questions.csv")

def saveAll(): # Saves the state of every dataframe
  global users, classes, quizzes, questions
  users.to_csv(data_folder + "/users.csv")
  classes.to_csv(data_folder + "/classes.csv")
  quizzes.to_csv(data_folder + "/quizzes.csv")
  questions.to_csv(data_folder + "/questions.csv")


# Data accessing/editing functions

def addUser(username, password, isStudent, isTeacher):
  if username in users.index.values:
    raise ValueError("Username Already Taken")
  else:
    users.loc[username] = ([password, isStudent, isTeacher]) # Add the user to the users dataframe
    saveAll()

def delUser(username):
  users.drop(username, inplace=True)
  saveAll()

def addClass(name, teachers, students):
  id = classes.shape[0]                            # The next available Class ID
  classes.loc[id] = (name, teachers, students, []) # Add the class to the classes dataframe
  saveAll()

def addQuiz(class_id, name, questions):
  id = quizzes.shape[0]                       # The next available Quiz ID
  quizzes.loc[id] = (name, questions, [])     # Add the quiz to the quizzes dataframe
  classes.loc[class_id, "quizzes"].append(id) # Add quiz to the given class
  saveAll()

def addQuestion(prompt, answers, ansIndex):
  id = questions.shape[0]                         # The next available Quiz ID
  questions.loc[id] = (prompt, answers, ansIndex) # Add the question to the dataframe
  saveAll()

# Old class structure (To replace, but the database implementation can't replace it just yet, so I'm leaving it so the rest of the code will still run)

class Student:
    def __init__(self, firstname, lastname, classes, score):
        self.firstName = firstname
        self.lastName = lastname
        self.classes = classes
        self.score = score

    def getscore(self):
        return self.score

    def getclasses(self):
        return self.classes

    class StudentClass:
        def __init__(self, class_name, quizzes, class_score):
            self.class_name = class_name
            self.quizzes = quizzes
            self.class_score = class_score

        def getclassname(self):
            return self.class_name

        def getquizzes(self):
            return self.quizzes

        def getclassscore(self):
            return self.class_score


class Faculty:
    def __init__(self, firstname, lastname, classes):
        self.firstName = firstname
        self.lastName = lastname
        self.classes = classes

    def getclasses(self):
        return self.classes

    class FacultyClasses:
        def __init__(self, class_name, quizzes, completion):
            self.class_name = class_name
            self.quizzes = quizzes
            self.completion = completion

        def getclassname(self):
            return self.class_name

        def getquizzes(self):
            return self.quizzes

        def getcompletion(self):
            return self.completion


class Admin:
    def __init__(self, firstname, lastname):
        self.firstName = firstname
        self.lastName = lastname



