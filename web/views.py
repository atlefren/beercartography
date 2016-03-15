# -*- coding: utf-8 -*-

from flask import render_template
from web import app


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/add')
def add():
    return render_template('add.html')
