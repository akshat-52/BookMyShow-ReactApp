import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
  return (
    <div>
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./c1.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./c2.png"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./c3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SliderImages;
