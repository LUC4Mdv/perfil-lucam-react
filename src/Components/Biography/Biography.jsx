import React from 'react';
import Typed from 'typed.js';
import './Biography.css'

function Desc() {
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['"As notas que quero, não vem da escola..."'],
        typeSpeed: 130,
        loop: false,
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

function Biography() {
  return (
    <>
        <section id="biography">
            <div className="profile-text">
                <div className="conteudo">
                    <h2><i class="fa-solid fa-dollar-sign"></i> Lucam </h2>
                    <h3 className="p">{Desc()}</h3>
                    <p className="bio-1">Criando sistemas apenas por diversão, meu legado é sempre achar graça nas pequenas coisas.</p>
                </div>
            </div>

            <div className="profile-photo">
            </div>
        </section>
    </>
  )
}

export default Biography