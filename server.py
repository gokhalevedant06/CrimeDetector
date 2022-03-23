

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/<string:pagename>")
def html_page(pagename  = None):
    return f"hii {pagename}"
@app.route("/test")
def okay():
    db.todos.insert_one({'title': "todo title", 'body': "todo body"})
    return flask.jsonify(message="success") 