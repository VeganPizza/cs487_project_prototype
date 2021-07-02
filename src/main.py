import json
import numpy as np
import pandas as pd

import os

# I believe code in this area is no longer necessary, but am
# not sure enough to delete it on my own.
# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
script_dir = os.path.dirname(__file__)
file_path = os.path.join(script_dir, 'userdata/users.json')
with open(file_path, 'r') as f:
    data = json.load(f)

#f = open('users.json')

data = np.array(data)
f.close()
# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


# Data structure code
data_folder = "/userdata"



def load_data(): # Loads every dataframe from the data folder
  global users, classes, quizzes, questions

  # Load users.json; a blank template is loaded instead if the file does not exist.
  try:
    users = pd.read_json(data_folder + "/users.json")
  except:
    users = pd.DataFrame(columns=["username", "password", "isStudent", "isTeacher"]).set_index("username")
    users.to_json(data_folder + "/users.json")
  
  # Load classes.json; a blank template is loaded instead if the file does not exist.
  try:
    classes = pd.read_json(data_folder + "/classes.json")
  except:
    classes = pd.DataFrame(columns=["id", "name", "teachers", "students", "quizzes"]).set_index("id")
    classes.to_json(data_folder + "/classes.json")

  # Load quizzes.json; a blank template is loaded instead if the file does not exist.
  try:
    quizzes = pd.read_json(data_folder + "/quizzes.json")
  except:
    quizzes = pd.DataFrame(columns=["id", "name", "questions", "submissions"]).set_index("id")
    quizzes.to_json(data_folder + "/quizzes.json")

  # Load questions.json; a blank template is loaded instead if the file does not exist.
  try:
    questions = pd.read_json(data_folder + "/questions.json")
  except:
    questions = pd.DataFrame(columns=["id", "prompt", "answers", "ansIndex"]).set_index("id")
    questions.to_json(data_folder + "/questions.json")


def save_data(): # Saves the state of every dataframe to disc in json form
  global users, classes, quizzes, questions
  users.to_json(data_folder + "/users.json")
  classes.to_json(data_folder + "/classes.json")
  quizzes.to_json(data_folder + "/quizzes.json")
  questions.to_json(data_folder + "/questions.json")


# Returns the lowest numerical index for the 
# given dataframe that is not yet in use.
def next_valid_id(df):
  if df.shape[0] not in df.index.values:
    return df.shape[0]
  else:
    i = 0
    while 0==0:
      if i not in df.index.values:
        return i



#Data accessing/editing functions
load_data() # Loads the dataset into memory so the accessors will work


def add_user(username, password, isStudent, isTeacher):
  if username in users.index.values:
    # raise ValueError("Given username is already taken")
    return False
  else:
    users.loc[username] = ([password, isStudent, isTeacher]) # Add the user to the users dataframe
    save_data()
    return True


def del_user(username):
  if username in users.index.values:
    users.drop(username, inplace=True)
    save_data()
    return True
  else:
    return False
    # raise ValueError("Given user does not exist")


def look_up_user(usr, psswrd):
  try:
    return users.loc[usr, "password"] == psswrd
  except KeyError:
    return False
login = look_up_user # Alias


def edit_username(usr, psswrd, new_usrname): 
  if not look_up_user(usr, psswrd):
    return False
    # raise ValueError("Given existing username-password combination is invalid")
  elif new_usrname in users.index.values:
    return False
    # raise ValueError("Given target username is taken")
  else:
    users.rename(index={usr:new_usrname}, inplace=True)
    
    for c in user_classes(usr, teacher=False):
      class_del_user(usr, c)
      class_add_user(new_usrname, c)
    for c in user_classes(usr, teacher=True):
      class_del_user(usr, c, teacher=True)
      class_add_user(new_usrname, c, teacher=True)

    save_data()
    return True


def edit_password(usr, psswrd, new_psswrd, confirm_psswrd): 
  if not look_up_user(usr, psswrd):
    return False
    # raise ValueError("Given existing username-password combination is invalid")
  elif new_psswrd != confirm_psswrd:
    return False
    # raise ValueError("Password confirmation failed")
  else:
    users.loc[usr, "password"] = new_psswrd
    save_data()
    return True


# def edit_password(usr, psswrd, new_psswrd, confirm_psswrd) # TODO


def add_class(name, teachers=[], students=[]):
  id = next_valid_id(classes)                      # The next available Class ID
  classes.loc[id] = (name, teachers, students, []) # Add the class to the classes dataframe
  save_data()
  return True


# Returns a list of classes the given user is a student in. If teacher=
def user_classes(username, teacher=False): 
  if not teacher:
    column = "students"
  else:
    column = "teachers"
  
  return classes.index[classes[column] \
                       .apply(lambda user_list: username in user_list)] \
                       .to_list()


# Adds a student to the given class. If teacher=True, they're added as a
# teacher, instead.
def class_add_user(username, class_id, teacher=False): 
  if not teacher:
    column = "students"
  else:
    column = "teachers"

  if username not in users.index.values:
    return False
    # raise ValueError("User does not exist")
  if class_id not in classes.index.values:
    return False
    # raise ValueError("Class does not exist")
  user_list = classes.loc[class_id, column]
  if user_list is None:
    user_list = []
  if username in user_list:
    return False
    # raise ValueError("Specified user is already in the given class")
  
  try:
    classes.loc[class_id, column].append(username)
  except AttributeError:
    classes.loc[class_id, column] = [username]
  save_data()
  return True


# Removes a student from the given class. If teacher=True, they're removed as a
# teacher, instead.
def class_del_user(username, class_id, teacher=False): 
  if not teacher:
    column = "students"
  else:
    column = "teachers"

  if class_id not in classes.index.values:
    return False
    # raise ValueError("Class does not exist")
  user_list = classes.loc[class_id, column]
  if user_list is None:
    user_list = []
  if username not in user_list:
    return False
    # raise ValueError("Specified user not in the given class")
  
  classes.loc[class_id, column].remove(username)
  save_data()
  return True


def add_quiz(class_id, name, questions):
  id = next_valid_id(quizzes)                 # The next available Quiz ID
  quizzes.loc[id] = (name, questions, [])     # Add the quiz to the quizzes dataframe
  classes.loc[class_id, "quizzes"].append(id) # Add quiz to the given class
  save_data()
  return True


def add_question(prompt, answers, ansIndex):
  id = next_valid_id(questions)                   # The next available Quiz ID
  questions.loc[id] = (prompt, answers, ansIndex) # Add the question to the dataframe
  save_data()
  return True