import './Projects.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
 

function Projects() {

  return (
    <>
        <section id="projects">
        <div className="projects-main">
            <h2>Projetos</h2>   
            <div className="projects-slides">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                <SwiperSlide><img className='slide-img-1' /></SwiperSlide>
                <SwiperSlide><img className='slide-img-2' /></SwiperSlide>
                <br />
            </Swiper>
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
