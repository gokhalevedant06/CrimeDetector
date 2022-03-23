from flask import Flask
import requests

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/test")
def test_route():
    a = requests.get("https://v2.jokeapi.dev/joke/Any")
    # print(a.json())
    data = a.json()
    print(data)
    return "success";

@app.route("/<string:pagename>")
def html_page(pagename  = None):
    return f"hii {pagename}"



