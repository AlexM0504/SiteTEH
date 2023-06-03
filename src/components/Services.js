import { Container } from "react-bootstrap";
import tree from "../assets/img/featured-icon-tree.png";
import bulb from "../assets/img/featured-icon-bulb.png";
import bottle from "../assets/img/featured-icon-bottle.png";
import cans from "../assets/img/featured-icon-cans.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../App.css';


export const Services = () =>{
    return(
	
    <section className = "services" id="services">

    <h1 className="justify-content-center servicii" > SERVICII </h1>
	<TrackVisibility>
    {( { isVisible }) =>
    <div className={isVisible ? "animate__animated animate__fadeIn animate__slow" : "opacity-2"}>
    <div className="d-flex p-2 justify-content-center cards">     

        <div className="box">
		<div className="glass"></div>
		<div class="content">
			<h2>RECICLARE HARTIE SI CARTON</h2>
            <img src={tree} />
		</div>
	    </div>

	    <div class="box">
		<div class="glass"></div>
		<div class="content">
			<h2>RECICLARE ELECTRICE SI ELECTRONICE</h2>
            <img src={bulb} />
		</div>
	    </div>

	    <div class="box">
		<div class="glass"></div>
		<div class="content">
			<h2>RECICLARE MASE PLASTICE</h2>
            <img src={bottle} />
		</div>
	    </div>

        <div class="box">
		<div class="glass"></div>
		<div class="content">
			<h2>RECICLARE METALE</h2>
            <img src={cans} />
		</div>
	    </div>
    </div>
	</div>}
	</TrackVisibility>
    </section>

    )
};