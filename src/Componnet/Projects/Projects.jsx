import './Projects.css'

function Projects() {
  return (
    <>
        <section id="projects">
        <div className="projects-main">
            <h2>Projetos</h2>   
            <div className="projects-slides">
            </div>
            
            
            <div className="projects-tecs">
                <div className="icons">
                    <i className="fa-brands fa-react" title="React.js"></i>
                    <i className="fa-brands fa-node-js" title="Noje.js"></i>
                    <i className="fa-brands fa-windows" title="Windows 10"></i>
                </div>
            </div>
        </div>
        <div className="scroll-top" >
            <a href="#" tabIndex="7"><i className="ri-arrow-up-s-fill"></i></a>
        </div>
    </section>  
    </>
  )
}

export default Projects