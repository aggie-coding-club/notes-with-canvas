import { Container } from 'reactstrap'
import './Home.css'
import Card from '@mui/material/Card'
import { Box } from '@mui/material';

export default function Home( props ) { 
    return(
        <>
            <div className="title-container" >
                <h1 className='title'>your tasks, calendar, and notes</h1>
            </div>
            <Container>
                    <Card className='about-taskboard' sx={{ height: 200 }}>How does Taskboard work?</Card>
                    <Card className='about-calendar' sx={{ height: 200 }}>How does Calendar work?</Card>
                    <Card className='about-notes' sx={{ height: 200 }}>How does Notes work?</Card>
            </Container>
        </>
    );
}