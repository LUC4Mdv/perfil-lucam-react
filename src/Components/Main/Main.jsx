import React from 'react';
import Typed from 'typed.js';
import './Main.css'


function MyComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Programador Full-Stack'],
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
                    <h1 className="nome">Lucas Gabriel</h1>
                    <h2>{MyComponent()}</h2>
                    <p className="link"><em>lucam.site</em></p>
                    <h2><i className="fa-solid fa-thumbs-up"></i> Seja bem-vindo(a)!</h2>
                    <p>Desenvolvedor web Full-Stack</p>
                    <p>Site em desenvolvimento</p>
                </div>
                <div className="icons">
                    <ul>
                        <li><a href="https://www.instagram.com/lucam_pvd" target='_blank' rel='noreferrer' tabIndex="4"><i className="fa-brands fa-instagram" title="INSTAGRAM"></i></a></li>
                        <li><a href="https://github.com/LUC4Mdv" target='_blank' rel='noreferrer' tabIndex="5"><i className="fa-brands fa-github" title="GITHUB"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/lucas-gabriel-boamarcha-681575245/" target='_blank' rel='noreferrer' tabIndex="6"><i className="fa-brands fa-linkedin" title="LINKEDIN"></i></a></li>
                    </ul>
                </div>
            </div>

            <div className="conteudo">
                <div className="links">
                    <ul>
                        <li><a href="#" tabIndex="2">Portifolio</a></li>
                        <li><a href="#" tabIndex="3">Certificações</a></li>
                    </ul>
                </div>
            </div>
        </main>
    </>
  )
}

export default Main
