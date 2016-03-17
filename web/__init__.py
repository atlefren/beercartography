# -*- coding: utf-8 -*-
import os

from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)

debug = os.environ.get('DEBUG', 'False') == 'True'

app.config.update(
    DEBUG=debug,
    SECRET_KEY=os.environ.get('SECRET_KEY', ''),
    SQLALCHEMY_TRACK_MODIFICATIONS=True,
    SQLALCHEMY_DATABASE_URI=os.environ.get('SQLALCHEMY_DATABASE_URI', 'postgres://beer:beer@localhost/beercartography'),
)

db = SQLAlchemy(app)

from web import views

app.db_session = db.session