import { useState } from "react";
import contactImg from "../assets/img/contact-img.png";
import { Container, Row, Col } from "react-bootstrap";


export const Contact = () => {
    const formInitialDetails = {
        firstName:'',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText,setButtonText ] = useState('Trimite');
    const [status,setStatus] = useState({});

    const onFormUpdate= (category,value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Se trimite...');

        let response= await fetch("http://localhost:5000/contact",{
            method: 'POST',
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });

        setButtonText("Trimite")
        let result = response.json();
        setFormDetails(formInitialDetails);
        if(result.code === 200){
            setStatus({ succes : true, message:'Mesajul s-a trimis cu succes'});
        }else {
            setStatus({ succes: false, message:'Ceva nu a mers bine, te rog incearca mai tarziu!'})
        }

    }


    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Incepe sa reciclezi acum!</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type='text' required={true} value={formDetails.firstName} placeholder="Prenume" onChange={(e) => onFormUpdate('firstName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type='text'  required={true} value={formDetails.lastName} placeholder="Nume" onChange={(e) => onFormUpdate('lastName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type='email' required={true} value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type='tel' required={true} value={formDetails.phone} placeholder="Telefon" onChange={(e) => onFormUpdate('phone',e.target.value)}/>
                                </Col>
                                <Col>
                                <textarea row="6" required={true} value={formDetails.message} placeholder="Mesaj" onChange={(e) => onFormUpdate('message',e.target.value)}/>
                                <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.succes === false ? "danger" : "succes"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}