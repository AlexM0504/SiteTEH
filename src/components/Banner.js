import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import premiu from '../assets/img/premiu.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["ambitiosi","seriosi","ECO-FRIENDLY","LOCUL 1"];
    const [text, setText] = useState('');
    const [delta,setDelta] = useState(300- Math.random()*100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(()=>{
                tick();
        },delta)

        return () => { clearInterval(ticker) }
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0, text.length+1)

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
  
        <section className = "banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {( { isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__bounceInDown animate_slower" : ""}>
                                <span className="tagline">LOCUL 1 IN TOP PROFIT ROMANIA – SECTORUL 3</span>
                                <h1>
                                    {'Ne mandrim sa spunem ca suntem '}
                                <span className="wrap">{text}.</span>
                                </h1>
                                <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={premiu} alt="premiu"/>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}