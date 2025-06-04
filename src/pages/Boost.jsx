import React from 'react';
import Header from '../components/Header';
import '../styles/pages/boost.css'

function  Boost() {
    return (    
        <>
        <Header/>
        <div className='fundo-boost'>
          <div className="container-boost" >
          <h1 className='titulo1-boost' style={{ fontFamily: 'Pirata One, cursive', fontSize: '2.5rem', marginTop: '150px' }}>
            Sistema de Boost
          </h1>
          </div>
        </div>
        <div className='fundo2-boost'>
          <div className='container-boost2'>
             <h1 className='titulo2-boost' style={{ fontFamily: 'Pirata One, cursive', fontSize: '1.5rem', marginTop: '30px'}}>
                Set Recomendado para utilização do cristal divino
            </h1>
          </div>
        </div>
        <div className='fundo3-boost'>
          <div className='container-boost3'>
             <h1 className='titulo3-boost' style={{ fontFamily: 'Pirata One, cursive', fontSize: '1.5rem', marginTop: '30px'}}>
                Sistema de Pitch dos boosts
            </h1>
          </div>
        </div>
        </>
    );
}

export default Boost;