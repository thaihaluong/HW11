from flask import Flask
from flask_restful import Resource,Api,reqparse
import json

from mongoengine import *

app = Flask(__name__)
api=Api(app)

connect(
   'manlymen',
   username = 'thaiha',
   password = 'thaiha',
   host = 'ds145178.mlab.com',
   port = 45178
)

parser = reqparse.RequestParser()
parser.add_argument("name",type = str,location = "json")
parser.add_argument("desc",type = str, location = "json")
parser.add_argument("img",type = str, location = "json")


class Men(Document):
    name = StringField()
    desc = StringField()
    img = StringField()


class AddMen(Resource):
    def get(self):
        return [json.loads(zai.to_json())for zai in Men.objects]
    def post(self):
        args = parser.parse_args()
        name = args["name"]
        desc = args["desc"]
        img = args["img"]
        zai = Men(name =name,desc = desc, img = img)
        zai.save()
        return json.loads(zai.to_json())

class seeMen(Resource):
    def get(self):
        return [json.loads(zai.to_json())for zai in Men.objects]

class DelMen(Resource):
    def get(self,men_id):
        all_men = Men.objects()
        the_one = all_men.with_id(men_id)
        return json.loads(the_one.to_json())
    def delete(self,men_id):
        all_men = Men.objects()
        the_one = all_men.with_id(men_id)
        the_one.delete()

class PutMen(Resource):
    def get(self,men_id):
        all_men = Men.objects()
        the_one = all_men.with_id(men_id)
        return json.loads(the_one.to_json())
    def put(self,men_id):
        all_men = Men.objects()
        the_one = all_men.with_id(men_id)
        args = parser.parse_args()
        name = args["name"]
        desc = args["desc"]
        img = args["img"]
        the_one.update(set__name = name, set__desc = desc, set__img = img)
        return json.loads(the_one.to_json())


api.add_resource(seeMen,"/api/see")
api.add_resource(AddMen,"/api/add")
api.add_resource(DelMen,"/api/del/<men_id>")
api.add_resource(PutMen,"/api/put/<men_id>")

@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
