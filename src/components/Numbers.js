import { FadeIn } from 'react-slide-fade-in';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../App.css';


export const Numbers = () => {

    let valueDisplays = document.querySelectorAll(".num");
    let interval = 3000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });

   
    return (
        
        
        <section className="numbers" id="numbers">
            <div>
                <h1><span className='stroke-text'>RECICLEAZA</span> <strong className='acum'>ACUM</strong></h1>
                <p>Reciclarea este un proces de tranformare al deseurilor in produse noi prevenind risipa de materiale potential utile, 
                    reducerea consumului de materii prime proaspete, reducerea consumului de energie, 
                    poluarea aerului (prin incinerare) si poluarea apei (prin deversare) prin reducerea nevoii de eliminare a „deseurilor conventionale”, 
                    si reducerea gazelor cu efect de sera ca urmare a productie de plastic. 
                    Reciclarea este componenta cheie in reducerea deseurilor moderne si este a treia componenta a ierarhiei deseurilor <span>„Reduce, Reutilizeaza si Recicleaza”</span>
                    </p>
            </div>
            <TrackVisibility>
            {( { isVisible }) =>
        <div className={isVisible ? "animate__animated animate__backInLeft animate__slow" : "opacity-0"}>
            <div className="wrapper-numbers justify-content-center">
                <div className="container-numbers">
                    <span className="num" data-val="90235">90235</span>
                    <span className="text">Peturi Reciclate</span>
                </div>

                <div className="container-numbers">
                    <span className="num" data-val="532">532</span>
                    <span className="text">Tone de metal reciclate</span>
                </div>

                <div className="container-numbers">
                    <span className="num" data-val="3468">3468</span>
                    <span className="text">Tone de deseuri reciclate</span>
                </div>

                <div className="container-numbers">

                    <span className="num" data-val="645">645</span>
                    <span className="text">Tone valorificate</span>
                </div>
            </div>
            </div>}
	        </TrackVisibility>
        </section>
        
    )
}
