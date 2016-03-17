# -*- coding: utf-8 -*-

import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base
from flask.ext.jsontools import JsonSerializableBase

Base = declarative_base(cls=(JsonSerializableBase,))


class Image(Base):
    __tablename__ = 'images'
    id = sa.Column('id', sa.Integer, primary_key=True)
    name = sa.Column('name', sa.Text())
    filename = sa.Column('filename', sa.Text())
    shape = sa.Column('shape', sa.Unicode(50))
    username = sa.Column('username', sa.Text())
    mimetype = sa.Column('mimetype', sa.Unicode(100))
