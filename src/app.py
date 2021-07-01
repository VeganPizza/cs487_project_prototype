from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return 'Yo'


# @app.route('/')
# def add_article():
#     title = request.json['title']
#     body = request.json['body']


if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080) # http://0.0.0.0:8080/
