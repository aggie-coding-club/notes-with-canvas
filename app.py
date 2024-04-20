from flask import Flask, request, make_response
from flask_cors import CORS
import zipfile
import os
import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
#place json file in same directory as this file
cred = credentials.Certificate("./NAME_OF_JSONFILE.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes. This allows The React App to communicate with Flask App

###FIRESTORE TEST###
snapshot = db.collection("Users")
print(snapshot)
def getUser(userId):
    if userId == "null":
        return None
    return snapshot.document(userId).get().to_dict()
print(getUser("Classes"))
################

def findFilePath(fileName, directory):
    for root, dirs, files in os.walk(directory):
        if(fileName in files):
            return os.path.join(root, fileName)

def readCourseData(filePath):
    with open(filePath, 'r') as courseData:
        courseContent = courseData.read()
        print(courseContent[0:21])
        return courseContent[21:] #Only return the data, not variable declaration
        

@app.route('/')
def hello():
    return '<h1>Hello, World</h1>!'

@app.route('/uploadCourse', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        #print(request.files)
        #print(courseFile)
        #if submitted form did not include a file
        if("file" not in request.files):
            return "No file received"
        #Get the file from the request
        file = request.files['file']
        print(file)
        #if the filename is nothing, it's an empty file
        if file.filename == '':
            return 'No selected file'
        else:
            #TO DO: make this directory a temperary one that gets deleted after extraction
            zip_path = os.path.join("./zipped_Courses",file.filename)
            file.save(zip_path)
            unzip_path = "./unzipped_Courses"
            with zipfile.ZipFile(zip_path, "r") as zip_ref:
                #file_names = zip_ref.namelist()
                # for file_name in file_names:
                #     print(file_name)
                for file_info in zip_ref.infolist():
                    if("course-data.js" in file_info.filename):
                        zip_ref.extract(file_info, unzip_path)
                        courseFilePath = findFilePath("course-data.js","./unzipped_Courses")
                        courseJson = json.dumps(readCourseData(courseFilePath))
                        response = make_response(courseJson)
                        response.headers['Content-Type'] = 'application/json'
                        return response
                else:
                    return "Could not find file"
            
    else:
        # Return an error response if the request method is not POST
        return 'Method Not Allowed', 405


if __name__ == '__main__':
    app.run(debug=True)