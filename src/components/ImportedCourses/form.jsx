import React from 'react';
import axios from "axios";
import "./ImportedCourses.css";
class FormSubmit extends React.Component {
    //this function sends all form submits to the flask server using axios
        handleSubmit = (event) => {
        event.preventDefault();
        //send file over to flask server for handling
        const url = 'http://localhost:5000/uploadCourse';
        const formData = new FormData(event.target);
        //console.log(formData.get("file"));
        // Send the POST request using Axios
        axios.post(url, formData)
            .then(function(response) {
                // Handle success
                console.log('Response:', response.data);
            })
            .catch(function(error) {
                // Handle error
                console.error('Error:', error);
            });
    };
    render() {
        return (
            <div className="form-container">
                <form id="upload-form" onSubmit={this.handleSubmit}> {/*calls the submit function on submission of form */}
                    <input id ="file-upload" type="file" name="file"/>
                    <input id ="submit" type="submit"/>
                </form>
            </div>
        );
    }
}

export default FormSubmit;