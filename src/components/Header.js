import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header
() {
  return (
    <div>
            <Navbar expand="lg" variant="dark" style={{ padding: "15px", backgroundColor:"rgb(51, 53, 69)" }}>
                <Container>

                    <Navbar.Brand href="/">
                        <img
                            src="./logo.svg"
                            width="110"
                            height="30"
                            className="d-inline-block align-top"
                            alt="book my show logo"
                        />
                    </Navbar.Brand>

                    <Form style={{ width: "45%" }}>
                        <FormControl
                            className="lg-5"
                            type="search"
                            placeholder="Search for Movies, Events, Plays, Sports and Activities"
                            aria-label="Search"
                        />
                    </Form>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav>
                            <NavDropdown title="Location" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Mumbai</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">NCR</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Bengaluru</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Hyderabad</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Ahmedabad</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Chandigarh</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Chennai</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Pune</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Kolkata</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Other
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Button variant="danger" size="sm" style={{ margin: "3.5%" }}>Signin</Button>
                        </Nav>



                    </Navbar.Collapse>


                </Container>
            </Navbar>


            <Container fluid style={{ backgroundColor: "rgb(34, 37, 57)" }}>
                <Navbar style={{ padding: "0 90px" }}>
                    <Nav>
                        <Nav.Link href="movies" style={{ color: "white" }}>Movies</Nav.Link>
                        <Nav.Link href="register" style={{ color: "white" }}>Registration</Nav.Link>
                        <Nav.Link href="https://youtu.be/dQw4w9WgXcQ" style={{ color: "white" }}>Stream</Nav.Link>
                        <Nav.Link href="#action8" style={{ color: "white" }}>Events</Nav.Link>
                        <Nav.Link href="#action9" style={{ color: "white" }}>Plays</Nav.Link>
                        <Nav.Link href="#action10" style={{ color: "white" }}>Sports</Nav.Link>
                        <Nav.Link href="#action11" style={{ color: "white" }}>Activities</Nav.Link>
                        <Nav.Link href="#action12" style={{ color: "white" }}>Buzz</Nav.Link>


                    </Nav>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav style={{ fontSize: "0.8rem" }}>
                            <Nav.Link href="#action6" style={{ color: "white" }}>ListYourShow</Nav.Link>
                            <Nav.Link href="#action7" style={{ color: "white" }}>Corporates</Nav.Link>
                            <Nav.Link href="#action7" style={{ color: "white" }}>Offers</Nav.Link>
                            <Nav.Link href="#action8" style={{ color: "white" }}>Gift Cards</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>
            </Container>

    </div>
  );
}

export default Header
;
