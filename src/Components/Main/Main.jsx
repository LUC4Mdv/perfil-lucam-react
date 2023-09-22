import React from 'react';
import Typed from 'typed.js';
import './Main.css'


function MyComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Melhores Preços', 'Super Confiável', 'Serviços Instantâneos'],
      typeSpeed: 155,
      backSpeed: 100,
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

function Main() {


  return (
    <>
        <main>
            <div className="info">
                <div className="perfil">
                    <h1 className="nome">LUCAM</h1>
                    <h2>{MyComponent()}</h2>
                    <p className="link"><em>www.lucam.site</em></p>
                    <h2><i className="fa-solid fa-thumbs-up"></i> Seja bem-vindo(a)!</h2>
                    <p className='des'>Faça seu orçamento nas minhas redes</p>
                    <p className='des'>Aceito parcerias!</p>
                </div>
                <div className="icons">
                    <ul>
                        <li><i class="fa-solid fa-code"></i></li>

                        <li><i class="fa-solid fa-palette"></i></li>

                        <li><i class="fa-solid fa-money-check-dollar"></i></li>
                    </ul>
                </div>
            </div>

            <div className="conteudo">
                <div className="links">
                    <ul>
                        <li><a href="https://discord.gg/Qwxgry6yHX" 
                        target='_blank' tabIndex="0">Discord</a></li>
                        <li><a href="https://www.instagram.com/luc4mdv/" tabIndex="0" target='_blank'>Instagram</a></li>
                    </ul>
                </div>
            </div>
        </main>
    </>
  )
}

export default Main
