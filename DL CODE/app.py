from flask import Flask, render_template,request,redirect
import os
from werkzeug.utils import secure_filename

from detect import predict
app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
app.config['uploads'] = UPLOAD_FOLDER


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def my_form_post():
    image = request.files['image']
    # filename = secure_filename(image.filename)
    # print("FileName "+filename)
    # image.save(os.path.join(app.config['uploads'],filename))
    basepath = os.path.dirname(__file__)
    file_path = os.path.join(
    basepath, 'uploads', secure_filename(image.filename))
    result_path = 'detections/'+image.filename
    image.save(file_path)
    predict(file_path,image.filename)
    redirect('/')
    return render_template('index.html',content=result_path)

if __name__ == '__main__':
    app.run(debug=True)
