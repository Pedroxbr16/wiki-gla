import React from 'react';
import Header from './components/Header';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className='fundo'>
      <div className="container" >
          <h1 style={{ fontFamily: 'Pirata One, cursive', fontSize: '2.5rem' }}>
            Blackbeard Wiki
          </h1>
      </div>
      </div>
     <div className='fundo2'>
      <div className='contribuidores'>
        <h1 style={{fontFamily: 'Pirate One, cursive', fontSize: '2.5rem'}}>
          Contribuidores
        </h1>
      </div>
    </div>
    </>
  );
}

export default App;
