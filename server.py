from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/<string:pagename>")
def html_page(pagename  = None):
    return f"hii {pagename}"

    