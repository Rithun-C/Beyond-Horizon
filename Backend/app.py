from flask import Flask, request, jsonify
from flask_pymongo import PyMongo # type: ignore
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb+srv://Arise:3ZhBxRydBiHIgPWQ@cluster0.syj9r.mongodb.net/sample_supplies?retryWrites=true&w=majority&tls=true"

mongo = PyMongo(app)
db = mongo.db.sample

@app.route('/users', methods=['GET'])
def get_users():
    users = list(db.find({}, {"_id": 0}))
    return jsonify(users)

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.json

    if not data or "Name" not in data or "Branch" not in data:
        return jsonify({"error": "Missing required fields"}), 400

    db.insert_one({"Name": data["Name"], "Branch": data["Branch"]})
    
    return jsonify({"message": "User added successfully"}), 201

if __name__ == '__main__':
    app.run(debug=True)
