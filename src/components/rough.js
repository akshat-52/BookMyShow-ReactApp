import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function AllMovies(){
    return(
        <div>
            <Container fluid style={{padding:"5%"}}>
                <Row style={{textAlign: "center"}}>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"7%"}}>
                        <Card style={{height:"335px", width:"200px"}}>
                            <Card.Img src="./m1.png" alt="Card image" style={{height:"335px", width:"200px", alignSelf:"center"}}/>
                            <Card.Body>
                                <Card.Text><b>Nay Varan Bhat Loncha</b></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"7%"}}>
                        <Card style={{height:"335px", width:"200px"}}>
                            <Card.Img src="./m2.png" alt="Card image" style={{height:"335px", width:"200px", alignSelf:"center"}}/>
                            <Card.Body>
                                <Card.Text><b>Pushpa</b></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"7%"}}>
                        <Card style={{height:"335px", width:"200px"}}>
                            <Card.Img src="./m3.png" alt="Card image" style={{height:"335px", width:"200px", alignSelf:"center"}}/>
                            <Card.Body>
                                <Card.Text><b>83</b></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"7%"}}>
                        <Card style={{height:"335px", width:"200px"}}>
                            <Card.Img src="./m4.png" alt="Card image" style={{height:"335px", width:"200px", alignSelf:"center"}}/>
                            <Card.Body>
                                <Card.Text><b>The King`s Man</b></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"7%"}}>
                        <Card style={{height:"335px", width:"200px"}}>
                            <Card.Img src="./m5.png" alt="Card image" style={{height:"335px", width:"200px", alignSelf:"center"}}/>
                            <Card.Body>
                                <Card.Text><b>Spider-Man: No Way Home</b></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"7%"}}>
                        <Card style={{height:"335px", width:"200px"}}>
                            <Card.Img src="./m6.png" alt="Card image" style={{height:"335px", width:"200px", alignSelf:"center"}}/>
                            <Card.Body>
                                <Card.Text><b>House of Gucci</b></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"7%"}}>
                        <Card style={{height:"335px", width:"200px"}}>
                            <Card.Img src="./m7.png" alt="Card image" style={{height:"335px", width:"200px", alignSelf:"center"}}/>
                            <Card.Body>
                                <Card.Text><b>The Matrix Resurrections</b></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"7%"}}>
                        <Card style={{height:"335px", width:"200px"}}>
                            <Card.Img src="./m8.png" alt="Card image" style={{height:"335px", width:"200px", alignSelf:"center"}}/>
                            <Card.Body>
                                <Card.Text><b>Bangarraju</b></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AllMovies;