import './Tema.css'

function TemaButton(){
  const html = document.documentElement

  html.classList.toggle("dark")
 }

function Tema() {
  return (
    <>
      <div className="tema">
        <button className="tema" onClick={TemaButton} tabIndex={1}>
            <img />
        </button>
      </div>
    </>
  )
}

export default Tema