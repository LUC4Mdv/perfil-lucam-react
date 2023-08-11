import React from 'react';
import Typed from 'typed.js';
import './Biography.css'

function Desc() {
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Breve descrição.'],
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
                    <h1>Biografia</h1>
                    <h3 className="p">{Desc()}</h3>
                    <p className="bio-1">Me chamo Lucas Gabriel, nasci em 2005.<br /> 
                        <br /> Sou um jovem apaixonado por tecnologia e desenvolvimento de software,
                        <br /> especialmente no setor de desenvolvimento web.</p>
                </div>
            </div>

            <div className="profile-photo">
            </div>
        </section>
    </>
  )
}

export default Biography