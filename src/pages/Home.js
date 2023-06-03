
import { NavBar } from '../components/NavBar';
import { Banner } from '../components/Banner';
import { Services } from '../components/Services';
import { Numbers } from '../components/Numbers';
import { Certificates } from '../components/Certificates';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Services />
      <Numbers />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;