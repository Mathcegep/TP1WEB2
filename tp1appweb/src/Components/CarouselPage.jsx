import { Carousel } from "react-bootstrap";
import caroussel1 from "../Images/caroussel1.jpg" ;
import caroussel2 from "../Images/caroussel2.jpg" ;
import caroussel3 from "../Images/caroussel3.jpg" ;
import caroussel4 from "../Images/caroussel4.jpg" ;
import caroussel5 from "../Images/caroussel5.jpg" ;
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css";

function CarousselPage()
{
            return (
               <div className="carousel"> 
                    <Carousel>
                        <Carousel.Item interval={1500}>
                            <img src={caroussel1}  className="imageCarousel d-block w-100"/>
                            <Carousel.Caption>Premiere image</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}  >
                            <img src={caroussel2} className="imageCarousel d-block w-100"/>
                            <Carousel.Caption>Deuxieme image</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}  >
                            <img src={caroussel3} className="imageCarousel d-block w-100"/>
                            <Carousel.Caption>Troisieme image</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}  >
                            <img src={caroussel4} className="imageCarousel d-block w-100"/>
                            <Carousel.Caption>Quatrieme image</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img src={caroussel5} className="imageCarousel d-block w-100"/>
                            <Carousel.Caption>Cinquieme image</Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            )
}

export default CarousselPage 