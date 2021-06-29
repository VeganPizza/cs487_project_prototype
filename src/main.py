import json
import numpy as np

f = open("/Users/khushboobhattu/IdeaProjects/cs487_project_prototype/userdata/users.json", "r")
data = json.load(f)
data = np.array(data)
f.close()


# Functions ######
def look_up_user(usr, psswrd):
    valid = False
    for d in data:
        if d["username"] == usr and d["password"] == psswrd:
            valid = True
            return valid
        else:
            # error message
            valid = False
    return valid


# def update_data():
# changes made by user is updated in file

def login(usr, psswrd):
    # returns True if login info is correct, else returns false
    # find a way for placeholder data to be used as parameters when calling this function
    return look_up_user(usr, psswrd)


def edit_username(usr, psswrd, new_usrname):
    valid = look_up_user(usr, psswrd)
    if valid:
        for d in data:
            if d["username"] == usr and d["password"] == psswrd:
                d["username"] = new_usrname
                # update in file
        return True
    else:
        # error message
        # return False can be used to go back to user menu after the edit preference process has failed
        return False


def edit_password(usr, psswrd, confirm_psswrd, new_psswrd):
    valid = look_up_user(usr, psswrd)
    if valid:
        for d in data:
            if d["username"] == usr and d["password"] == psswrd and d["password"] == confirm_psswrd:
                d["psswrd"] = new_psswrd
                # update in file
        return True
    else:
        # error message
        # return False can be used to go back to user menu after the edit preference process has failed
        return False


# more functions to be added here

# User classes ######
# to be used to manipulate data once a user has logged in
class Student:
    def __init__(self, firstname, lastname, classes, score):
        self.firstName = firstname
        self.lastName = lastname
        self.classes = classes  # array of student classes
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
        self.classes = classes  # array of classes the faculty user teaches

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



# print(login("Fishly", "UPQtoj8"))
# print(edit_username("Fishly", "UPQtoj8", "Rocklee"))
