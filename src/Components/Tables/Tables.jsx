import React from 'react';
import Typed from 'typed.js';
import './Tables.css'


function Dolar() {
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['25 Reais', 'Apenas pix'],
        typeSpeed: 130,
        backSpeed: 130,
        loop: true,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
      <div className="App">
        <span ref={el} />
      </div>
    );
}

function Ttk() {
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['45 Reais', 'Apenas pix'],
        typeSpeed: 130,
        backSpeed: 130,
        loop: true,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
      <div className="App">
        <span ref={el} />
      </div>
    );
}


function Tables() {
  return (
    <>
        <section id="tables">
        <div className="tables-main">
            <h2><span>Popu</span>lares</h2>   
            <div className="tables-slides">
                <div className="card">
                    <i class="fa-brands fa-instagram"></i>
                    <ul>
                        <li><i class="fa-solid fa-check"></i> 10K Visualizações em reels</li>
                        <li><i class="fa-solid fa-check"></i> 3000 Seguidores</li>
                        <li><i class="fa-solid fa-check"></i> 100% Confiável</li>
                        <li><i class="fa-solid fa-check"></i> Instantâneo e Seguro</li>

                        <li className='dolar'><i class="fa-solid fa-money-check-dollar"></i>
                        {Dolar()}</li>
                    </ul>
                    <button><a href="https://discord.gg/Qwxgry6yHX" target='_blank'>Comprar</a></button>
                </div>


                <div className="card">
                <i class="fa-brands fa-tiktok"></i>
                    <ul>
                    <li><i class="fa-solid fa-check"></i> 50K Visualizações em videos</li>
                        <li><i class="fa-solid fa-check"></i> 1000 Seguidores Brasileiros</li>

                        <li><i class="fa-solid fa-check"></i> 100% Confiável</li>
                        <li><i class="fa-solid fa-check"></i> Instantâneo e Seguro</li>

                        <li className='dolar'><i class="fa-solid fa-money-check-dollar"></i>
                        {Ttk()}</li>
                    </ul>
                    <button><a href="https://discord.gg/Qwxgry6yHX" target='_blank'>Comprar</a></button>
                </div>

                <div className="card card-3">
                     <i class="fa-brands fa-youtube"></i>
                    <ul>
                        <li><i class="fa-solid fa-check"></i> 1000 Inscritos Monetizavel</li>
                        <li><i class="fa-solid fa-check"></i> 1000 Visualizações em videos</li>
                        <li><i class="fa-solid fa-check"></i> 100% Confiável</li>
                        <li><i class="fa-solid fa-check"></i> Instantâneo e Seguro</li>
                        <li className='dolar'><i class="fa-solid fa-money-check-dollar"></i>
                        {Dolar()}</li>
                    </ul>
                    <button><a href="https://discord.gg/Qwxgry6yHX" target='_blank'>Comprar</a></button>
                </div>


            </div>
        
        </div>
    </section>
    </>
  )
}

export default Tables
