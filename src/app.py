from flask import Flask, request
from src.main import *

# import json
app = Flask(__name__)


@app.route('/')
def hello():
    return 'Yo'


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == "GET":
        return "wrong request"
    if request.method == "POST":
        data = request.get_json(force=True)
        username = data['username']
        password = data['password']
        resp = {'result': False, 'user': None}
        if login(username, password):
            resp['result'] = True
            resp['user'] = username
        else:
            print("error")


if __name__ == "__main__":
    from waitress import serve

    serve(app, host="0.0.0.0", port=8080)  # http://0.0.0.0:8080/
