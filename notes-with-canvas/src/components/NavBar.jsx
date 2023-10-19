import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import {
  BrowserRouter, Routes, Route, Link
} from "react-router-dom"
import Taskboard from "./Taskboard.jsx";
import Home from "./Home.jsx";
import Calendar from "./Calendar.jsx";
import Notes from "./Notes.jsx";
import ImportedCourses from "./ImportedCourses.jsx";

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
              <Nav.Link as={Link} to="/taskboard">Taskboard</Nav.Link> {/* edit href links after */}
              <Nav.Link as={Link} to="/calendar">Calendar</Nav.Link>
              <Nav.Link as={Link} to="/notes">Notes</Nav.Link>
              <Nav.Link as={Link} to="/importedcourses">Imported Courses</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
            <NavDropdown title="Settings" id="basic-nav-dropdown" align="end"> {/* align will prevent sidebar from rendering off screen */}
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
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
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/importedcourses" element={<ImportedCourses/>}/>
      </Routes>
    </div>
  </div>
  </BrowserRouter>

);
}

export default NavBar;