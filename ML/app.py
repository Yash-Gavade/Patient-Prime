from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flask_cors import CORS, cross_origin
from scripts.medNames.medNames import scrape
import shutil
from PIL import Image
import os


app = Flask(__name__)
CORS(app)
api = Api(app)



class MedicineName(Resource):
    def post(self):
        generic_name = request.json["generic_name"]
        medicines = scrape(generic_name)
        return medicines


api.add_resource(MedicineName, "/generic_name")


if __name__ == "__main__":
    app.run(debug=True,port=5555)
