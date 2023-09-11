import './Tema.css'

let html = document.documentElement

function Tema() {
  function mudarTema() {
    html.classList.toggle('dark')

    localStorage.setItem('Tema', JSON.stringify(html.className))
  }

    let getTema = JSON.parse(localStorage.getItem('Tema'))
    if(getTema == 'dark'){
      html.className = 'dark'
    } 

  return (
    <>
      <div className="tema">
        <button className="tema" onClick={mudarTema} tabIndex={0}>
          <img alt=""/>
        </button>
      </div>
    </>
  );
}


export default Tema
