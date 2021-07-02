import json
import numpy as np

# f = open("/Users/khushboobhattu/IdeaProjects/cs487_project_prototype/userdata/users.json", "r")
# data = json.load(f)
import os

script_dir = os.path.dirname(__file__)
file_path = os.path.join(script_dir, 'userdata/users.json')
with open(file_path, 'r') as f:
    data = json.load(f)

# f = open('users.json')

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

def user_login(usr, psswrd):
    # returns True if login info is correct, else returns false
    # find a way for placeholder data to be used as parameters when calling this function
    return look_up_user(usr, psswrd)


def edit_username(usr, psswrd, new_usrname):
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
    for d in data:
        if d["username"] == usr and d["password"] == psswrd and d["password"] == confirm_psswrd:
            d["psswrd"] = new_psswrd
            # update in file
            return True
        else:
            # error message
            # return False can be used to go back to user menu after the edit preference process has failed
            return False
