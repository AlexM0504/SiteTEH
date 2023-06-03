import '../App.css';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Gallery } from '../components/Gallery';
import { Footer } from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';



function Photos() {
    return (
        <div className='App'>
            <NavBar />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Photos;