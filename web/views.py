# -*- coding: utf-8 -*-
import json
import random
import uuid
import mimetypes

from flask import render_template, request
from flask import current_app

from web import app
from blobstore import save_file, get_images, get_image
from models import Image


def get_images_dummy(num):
    res = []
    for n in range(0, num):
        res.append({
            'country': 'no',
            'image': 'http://ipsumimage.appspot.com/300x200?l=Image %s' % n,
            'user': 'atlefren',
            'title': 'Image %s' % n,
            'id': n,
            'score': random.randint(1,11)
        })
    return res


@app.route('/')
def index():
    res = []
    for n, image in enumerate(get_images()):
        image_data = get_image(image)
        imgb64 = 'data:image/png;base64,%s' % image_data.encode('base64')
        res.append({
            'country': 'no',
            'image': imgb64,
            'user': 'atlefren',
            'title': 'Image %s' % n,
            'id': n,
            'score': random.randint(1, 11)
        })

    return render_template('index.html', images=json.dumps(res))


@app.route('/add')
def add():
    return render_template('add.html')

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


@app.route('/ul', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = '%s%s' % (str(uuid.uuid1()), mimetypes.guess_extension(file.mimetype, strict=False))
            print filename
            save_file(file.stream, filename, file.mimetype)
            image = Image()

            image.name = 'test'
            image.filename = filename
            image.mimetype = file.mimetype

            current_app.db_session.add(image)
            current_app.db_session.commit()

    return render_template('add.html')
