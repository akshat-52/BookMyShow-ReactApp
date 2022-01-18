import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router";
import axios from "axios";
import {useState, useEffect} from 'react';

function SingleMovieFetch() {
    const {movid} = useParams();
    const [singledata, setSingleData] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get(`https://bookmyshow-akshat52.herokuapp.com/movie/${movid}`);
            console.log(response);
            setSingleData([response.data]);
            console.log([response.data]);
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <div>
            <Container fluid style={{padding:"5%"}}>
                <Row style={{textAlign:"center"}}>
                    {singledata.map((mov) => {
                        return (
                            <Col id={mov._id} key={mov._id} xs={6} md={4} lg={3} style={{marginBottom:"7%"}}>
                                <Card>
                                    <Card.Img variant="top" src={mov.imageurl} />
                                    <Card.Body>
                                    <Card.Text><b>{mov.title}</b></Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default SingleMovieFetch;