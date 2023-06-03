import React from 'react'
import { FadeIn } from 'react-slide-fade-in'; 
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import '../App.css';

import pic1 from '../assets/gallery/DSCF4621.jpg';
import pic2 from '../assets/gallery/DSCF4575-600x450.jpg';
import pic3 from '../assets/gallery/DSCF4619-600x450.jpg';
import pic4 from '../assets/gallery/DSCF4630.jpg';
import pic5 from '../assets/gallery/DSCF4638-600x450.jpg';
import pic6 from '../assets/gallery/DSCF4701-600x450.jpg';
import pic7 from '../assets/gallery/DSCF4746-600x450.jpg';
import pic8 from '../assets/gallery/IMG_6036-600x450.jpg';



export const Gallery = () => {
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
    return (<FadeIn
      from="left"
      positionOffset={400}
      triggerOffset={800}
      delayInMilliseconds={500}
      >
      <section className="gallery" id="gallery">
          <Container>
              
              <Row>
                  <Col>
                  <div className="certificates-bx">
                      
                      <h1>
                          Galerie Foto
                      </h1>
                      <Carousel responsive={responsive} infinite={true} className="gallery-slider">
                          
                          <div className="item">
                              <img src={pic1} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic2} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic3} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic4} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic5} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic6} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic7} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic8} alt="Image" />
                          </div>
                      </Carousel>
                      <Carousel responsive={responsive} infinite={true} className="gallery-slider">
                          
                          <div className="item">
                              <img src={pic8} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic7} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic6} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic5} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic4} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic3} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic2} alt="Image" />
                          </div>
                          <div className="item">
                              <img src={pic1} alt="Image" />
                          </div>
                      </Carousel>
                  </div>
                  </Col>
              </Row>
          </Container>
          
      </section>
      </FadeIn>
    )
}