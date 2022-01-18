import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import {useState, useEffect} from 'react';

function AllMoviesFetch() {
    const [data, setData] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get('https://bookmyshow-akshat52.herokuapp.com/movies');
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

   


    return (
        <div>
            <Container fluid style={{padding:"5%"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov) =>
                        <Col id={mov._id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"7%"}}>
                            <Card style={{cursor:"pointer"}} onClick={()=> window.location.href="/movies/"+mov._id }>
                                <Card.Img variant="top" src={mov.imageurl} />
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

export default AllMoviesFetch;