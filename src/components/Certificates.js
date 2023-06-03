import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import managment_c from "../assets/img/managment-c.jpg";
import managment_m from "../assets/img/managment-m.jpg";
import managment_s from "../assets/img/managment-s.jpg";
import TrackVisibility from 'react-on-screen';
import 'animate.css'
import { ArrowRightCircle } from 'react-bootstrap-icons';


export const Certificates = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        
        <section className="certificates" id="certificates">
          <TrackVisibility>
                        {( { isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn animate__faster" : "opacity-20"}>
                                <Container>
                <Row>
                    <Col>
                    <div className="certificates-bx">
                        
                        <h1>
                            CERTIFICATE
                        </h1>
                        <Carousel responsive={responsive} infinite={true} className="certificates-slider">
                            
                            <div className="item">
                                <img src={managment_c} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={managment_m} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={managment_s} alt="Image" />
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
                            </div>}
                        </TrackVisibility>
          {/* <TrackVisibility>
          {( { isVisible }) => <div className={isVisible ? "animate__animated animate__slideInUp animate_slower" : ""}>
            
            </div>};
            </TrackVisibility> */}
            
        </section>
        
      )
}