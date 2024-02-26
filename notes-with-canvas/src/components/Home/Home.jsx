import { Container } from 'reactstrap'
import './Home.css'
import Card from '@mui/material/Card'
import { Box, CardContent } from '@mui/material';

export default function Home( props ) { 
    return(
        <>
            <div className="title-container" >
                <h1 className='title'>your tasks, calendar, and notes</h1>
            </div>
            <div className="centered-div">
                <a href="https://github.com/brandonyuan123/notes-with-canvas/blob/home_page/App.jsx" target="_blank" id="info-heading">Click HERE to find out more!</a>
            </div>

            <div className="empty-space"></div>

            <div class="centered-div">
                <Card className='about-card' sx={{ height: 200 }}>
                    How does Taskboard work?
                    <CardContent className='about-card-content'>
                        Taskboard compiles all your to-dos, organized by lists and categories 
                        of your choosing. Assign dates to your tasks to have them appear on 
                        the calendar, as well.
                    </CardContent>
                </Card>

                <Card className='about-card' sx={{ height: 200 }}>
                    How does Calendar work?
                    <CardContent className='about-card-content'>
                        Schedule out events through our Calendar. Optionally, you can convert your 
                        events into tasks — and have them appear on Taskboard as well, with just
                        a little more specifying information.
                    </CardContent>
                </Card>

                <Card className='about-card' sx={{ height: 200 }}>
                    How does Notes work?
                    <CardContent className='about-card-content'>
                        Notes is a great place to organize your thoughts regarding plans, meeting 
                        details, and reminders. Create notes and sort them within files.
                    </CardContent>
                </Card>
            </div>
        </>
    );
}