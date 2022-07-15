
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import HeroSection from '../components/HeroSection';
import NavbarC from '../components/Navbar';
import Projects from '../components/Projects';


function Home() {
  return (
    <div className="App container-sm" syle = "background-color: black;">
      <NavbarC />
      <HeroSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
