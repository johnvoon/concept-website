import re
from flask import Blueprint, request
from flask_restful import Api, Resource
from models import Staff
from server.blueprints.practice_area.models import PracticeArea
from server.blueprints.client.models.matter import Matter
from flask_jwt import jwt_required
from lib.util_json import render_json

staff_api = Api(Blueprint('staff_api', __name__))

@staff_api.resource('/staff')
class StaffAPI(Resource):
    @staticmethod
    def get():
        staff = Staff.query.all()
        if staff:
            return render_json(200, {'staff': [member.to_json() for member in staff]})

        return render_json(404, {'message': 'No staff found'})
