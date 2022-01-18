import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function AllMovies(){
    console.log(data);
    return(
        <div>
            <Container fluid style={{padding:"5%"}}>
                <Row style={{textAlign: "center"}}>
                    {data.map((mov) =>
                        <Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"7%"}}>
                            <Card style={{height:"335px", width:"200px", cursor:"pointer"}} onClick={()=> window.location.href="/movies/"+mov.id}>
                                <Card.Img src={mov.image} alt="Card image" style={{height:"335px", width:"200px", alignSelf:"center"}}/>
                                <Card.Body>
                                    <Card.Text><b>{mov.title}</b></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default AllMovies;