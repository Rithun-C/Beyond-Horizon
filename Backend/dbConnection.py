from pymongo import MongoClient # type: ignore

uri = "mongodb+srv://Arise:3ZhBxRydBiHIgPWQ@cluster0.syj9r.mongodb.net/?retryWrites=true&w=majority&tls=true"
client = MongoClient(uri)
db = client["sample_supplies"]
collection = db["sample"]


try:
    print(collection.find_one()) 
    print("Connected to MongoDB successfully!")
except Exception as e:
    print(f"Error: {e}")