import json
import numpy as np

import os
script_dir = os.path.dirname(__file__)
file_path = os.path.join(script_dir, 'userdata/users.json')
with open(file_path, 'r') as f:
    data = json.load(f)

#f = open('users.json')

data = np.array(data)
f.close()


def look_up_user(usr, psswrd):
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


def edit_username(usr, psswrd, new_usrname):
    valid = look_up_user(usr, psswrd)
    if valid:
        for d in data:
            if d["username"] == usr and d["password"] == psswrd:
                d["username"] = new_usrname
        return True
    else:
        return False


def edit_password(usr, psswrd, confirm_psswrd, new_psswrd):
    valid = look_up_user(usr, psswrd)
    if valid:
        for d in data:
            if d["username"] == usr and d["password"] == psswrd and d["password"] == confirm_psswrd:
                d["psswrd"] = new_psswrd
        return True
    else:
        return False


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



