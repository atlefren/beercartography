# -*- coding: utf-8 -*-
import os

from flask import Flask

app = Flask(__name__)

debug = os.environ.get('DEBUG', 'False') == 'True'

show_ga = not debug

from web import views
