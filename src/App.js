import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import Background from './components/Background';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [visibleComponent, setVisibleComponent] = useState('introduction');

  const renderComponent = () => {
    switch (visibleComponent) {
      case 'background':
        return <Background />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className='main container-fluid'>
      <NavBar setVisibleComponent={setVisibleComponent}  />
      <section id="introduction" className='component-container' style={{backgroundColor:'#242020'}}><Introduction /></section>
      {visibleComponent !== 'introduction' && (
        <section className="component-container" style={{backgroundColor:'#242020'}}>
          {renderComponent()}
        </section>
      )}
    </div>
  );
}

export default App;


