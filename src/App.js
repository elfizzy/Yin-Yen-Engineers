import React from 'react';
import Contact from "./components/Contact";
import Navs from "./components/Navs";
import Slides from "./components/Slides";
import About from "./components/About";
import Count from "./components/Count";
import Quote from "./components/Quote";
import Services from "./components/Service";
import Gallery from "./components/Gellery";
import Testimonials from "./components/Testimonials";
import Forms from "./components/Forms";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <Contact /> */}
     <Navs/>
     <Slides />
     <About />
     <Count />
     <Services/>
     <Quote />
     <Gallery />
     <Testimonials />
     <Forms />
     <Footer /> 
    </div>
  );
}

export default App;
