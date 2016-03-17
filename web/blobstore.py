# -*- coding: utf-8 -*-
import os
from azure.storage.blob import BlockBlobService, ContentSettings

ACCOUNT = os.environ.get('BLOB_ACCOUNT')
KEY = os.environ.get('BLOB_KEY')
CONTAINER = 'beercartography'

block_blob_service = BlockBlobService(account_name=ACCOUNT, account_key=KEY)
block_blob_service.create_container(CONTAINER)


def save_file(stream, filename, mimetype):
    block_blob_service.create_blob_from_stream(
            CONTAINER,
            filename,
            stream,
            content_settings=ContentSettings(content_type=mimetype)
        )


def get_images():
    generator = block_blob_service.list_blobs('beercartography')
    for blob in generator:
        yield blob.name


def get_image(filename):
    blob = block_blob_service.get_blob_to_bytes(CONTAINER, filename)
    content = blob.content
    return content
