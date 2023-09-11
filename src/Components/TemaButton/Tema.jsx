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
        <button className="tema" onClick={mudarTema} >
          <img alt="" tabIndex={0}/>
        </button>
      </div>
    </>
  );
}


export default Tema
