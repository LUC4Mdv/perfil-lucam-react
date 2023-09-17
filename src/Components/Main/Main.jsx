import React from 'react';
import Typed from 'typed.js';
import './Main.css'


function MyComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Programador', 'Designer Gráfico', 'Freelancer'],
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
                    <p className='des'>Faça seu orçamento no discord</p>
                    <p className='des'><i class="fa-brands fa-discord"></i> Discord: luc4m_</p>
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
                        <li><a href="#biography" tabIndex="0">Biografia</a></li>
                        <li><a href="#projects" tabIndex="0">Projetos</a></li>
                    </ul>
                </div>
            </div>
        </main>
    </>
  )
}

export default Main
