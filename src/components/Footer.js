import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/LOGO-tehservice-1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <MailchimpForm />
            <Col size={6} sm={4}>
              <img src={logo} alt="Logo" />
            </Col>
            
            <Col size={6} sm={4} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="Icon" /></a>
                <a href="#"><img src={navIcon2} alt="Icon" /></a>
                <a href="#"><img src={navIcon3} alt="Icon" /></a>
              </div>
              <p>Copyright 2023. All Rights Reserved</p>
            </Col>
            <Col size={6} sm={4}>
              <ul className="footer-info">
                <li>Sediu Social</li>
                <li><i class="bi bi-geo-alt" style={{color:'white', fontSize:16}}></i>str. Hasmas nr 18, Sector 3, Bucuresti</li>
                <br />
                <li>Depozit punct de lucru</li>
                <li><i class="bi bi-geo-alt" style={{color:'white', fontSize:16}}></i>Ilfov , str. Gradinarilor nr. 16 , Oras Pantelimon</li>
                <li><i class="bi bi-clock" style={{color:'white', fontSize:16}}></i>09:00 – 17:00</li>
                <li><i class="bi bi-telephone" style={{color:'white', fontSize:16}}></i> 031/030.15.22</li>
                <li><i class="bi bi-clock" style={{color:'white', fontSize:16}}></i>0744/552.415</li>
                <li><i class="bi bi-envelope" style={{color:'white', fontSize:16}}></i>marian_roventa@yahoo.com</li>
                <li><i class="bi bi-globe" style={{color:'white', fontSize:16}}></i>www.tehservice.ro</li>
              </ul>
              
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }