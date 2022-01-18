import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardsSlider() {
  return (
    <div style={{background:"white", padding:"5%"}}>
        <Carousel indicators={false} >
            <Carousel.Item >
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-light" style={{height:"225px", width:"225px",}}>
                        <Card.Img src="./cc1.png" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc2.png" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc3.png" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc5.png" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc6.png" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-light text-white" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc4.png" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc5.png" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc6.png" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px",}}>
                        <Card.Img src="./cc1.png" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc2.png" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CardsSlider;
