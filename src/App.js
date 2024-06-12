import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <Technologies />
      <Projects/>
      <Education />
     
      <Contact />
       <div className='h-[250px]'></div> 
    </div>
  );
};

export default App;
