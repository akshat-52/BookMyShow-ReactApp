import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Premieres() {
  return (
    <div style={{background:"rgb(43, 49, 72)", padding:"5%"}}>
        <img width={"100%"} src="./premierBanner.png"></img>
        <h2 style={{color:"white"}}>Premieres</h2>
        <h7 style={{color:"white"}}>Brand new releases every Friday</h7>
        <Carousel indicators={false} >
            <Carousel.Item >
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./p1.png" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./p2.png" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./p3.png" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./p5.png" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./p4.png" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./p7.png" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./p4.png" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./p6.png" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./p5.png" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                    <Card style={{height:"300px", width:"200px", backgroundColor:"rgb(43,49,72)"}}>
                        <Card.Img src="./p3.png" alt="Card image" style={{height:"300px", width:"200px", alignSelf:"center"}}/>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Premieres;
