import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/esm/Image";

function Footer() {
  return (
    <div class="foot" style={{background:"rgb(49, 48, 53)", color:"white"}}>
        <Container fluid>
            <Row style={{padding:"1.5%"}}>
                <Col xs={{offset:1, span: 2}} style={{justifyContent:"center"}}>
                <Image src="./footerlogo.svg" />
                <b>List Your Show</b>
                </Col>
                <Col xs={7} style={{justifyContent:"center"}}>
                    Got a show, event, activity or a great experience?Partner with us and get listen on BookMyshow
                </Col>
                <Col xs={2} style={{display:"flex", justifyContent:"center"}}>
                    <Button size="md" style={{background:"rgb(236, 94, 113)"}}>Contact Today!</Button>
                </Col>
            </Row>
            <Row style={{textAlign:"center", padding:"3%", background:"rgb(64, 64, 67)"}}>
                <Col>
                   24/7 CUSTOMER CARE
                </Col>
                <Col>
                    RESEND BOOKING CONFIRMATION
                </Col>
                <Col>
                    SUBSCRIBE TO THE NEWSLETTER
                </Col>
            </Row>
            <Row style={{backgroundColor:"rgb(51, 51, 56)"}}>

            </Row>
        </Container>
    </div>
  );
}

export default Footer;