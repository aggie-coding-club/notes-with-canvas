import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import {
  BrowserRouter, Routes, Route, Link
} from "react-router-dom"
import Taskboard from "../Taskboard/Taskboard.jsx";
import Home from "../Home/Home.jsx";
import NWCCalendar from "../NWCCalendar/NWCCalendar.jsx";
import Notes from "../Notes/Notes.jsx";
import ImportedCourses from "../ImportedCourses/ImportedCourses.jsx";
import Settings from "../Settings/Settings.jsx"

function NavBar() {
  return (
    <BrowserRouter>
   <div className='NavBar'>
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container> 
          <Navbar.Brand as={Link} to="/home">Notes with Canvas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/taskboard">Taskboard</Nav.Link> 
              <Nav.Link as={Link} to="/calendar">Calendar</Nav.Link>
              <Nav.Link as={Link} to="/notes">Notes</Nav.Link>
              <Nav.Link as={Link} to="/importedcourses">Imported Courses</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
            <NavDropdown title="Settings" id="basic-nav-dropdown" align="end"> 
                <NavDropdown.Item as={Link} to="/settings">Settings Menu</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Give Feedback</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </> 
    <div>
      <Routes>
        <Route path="/taskboard" element={<Taskboard/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/calendar" element={<NWCCalendar/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/importedcourses" element={<ImportedCourses/>}/>
        <Route path="/settings" element={<Settings text="testing"/>}/>
      </Routes>
    </div>
  </div>
  </BrowserRouter>

);
}

export default NavBar;
