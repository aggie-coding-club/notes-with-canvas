import "./ImportedCourses.css";

export default function ImportedCourses() { 
    return(
        <>
            <div className="contain">
                <h1 className="IC-title">Imported Courses</h1>
                <p className="IC-paragraph">
                    To upload your Canvas courses, first navigate to the course you want to export, then: <br/> <br/>
                    Modules {">"} Export Course Content {">"} Select the resultant zip file below {">"} Upload<br/> <br/>
                    Keep in mind, if your Canvas course has the modules tab disabled, you can try adding "/modules" to the end of the URL. 
                    If the course has concluded, there is no way to export the course. Also keep in mind that one of the limitations to 
                    uploading courses is that the content will not update automatically.
                </p>
            </div>
            <div className="contain">
                <h1 className="IC-title">Uploaded Courses</h1>
                <p className="IC-paragraph">Your previously uploaded courses will appear here.</p>
            </div>
            <div className="form-container">
                <form>
                    <input id ="file-upload" type="file" name="filename"/>
                    <input id ="submit" type="submit"/>
                </form>
            </div>
        </>
    );
}