import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Support from './components/Support';
import GlobalReach from './components/GlobalReach';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Support />
      <GlobalReach />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;