import React from 'react';
import { Services } from '../components/Services';
import { Numbers } from '../components/Numbers';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function About() {
    return (
      <div className="App">
        <NavBar />
        <Services />
        <Numbers />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer />
      </div>
    );
  }

export default About;