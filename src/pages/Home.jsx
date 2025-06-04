import React from 'react';
import Header from '../components/Header';
import '../App.css'

function Home() {
  return (
    <>
      <Header />
      <div className='fundo'>
      <div className="container" >
          <h1 className='titulo1' style={{ fontFamily: 'Pirata One, cursive', fontSize: '2.5rem', marginTop: '150px' }}>
            Blackbeard Wiki
          </h1>
      </div>
      </div>
     <div className='fundo2'>
    <div className="container">
  <h1 style={{ fontFamily: 'Pirata One, cursive', fontSize: '2.5rem', marginTop: '50px' }}>
    Contribuidores
  </h1>

  <div className="cards">
    {[
      { nome: 'zKenay', img: '/contribuidores/zkenay.png' },
      { nome: 'Zheryon', img: '/contribuidores/zheryon.png' },
      { nome: 'zRyu', img: '/contribuidores/zryu.png' },
      { nome: 'Pedrox', img: '/contribuidores/pedrox.png' },
      { nome: 'Vitonezo', img: '/contribuidores/vitonezo.png' }
    ].map((contribuidor, index) => (
      <div className="card-contribuidor" key={index}>
        <img src={contribuidor.img} alt={contribuidor.nome} />
        <p>{contribuidor.nome}</p>
      </div>
    ))}
  </div>
</div>

    </div>
    </>
  );
}

export default Home;
