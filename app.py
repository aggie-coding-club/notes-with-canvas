from flask import Flask, request
from flask_cors import CORS
import zipfile
import os
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes. This allows The React App to communicate with Flask App
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
                        return "File submitted successfully"
                else:
                    return "Could not find file"
            
    else:
        # Return an error response if the request method is not POST
        return 'Method Not Allowed', 405


if __name__ == '__main__':
    app.run(debug=True)