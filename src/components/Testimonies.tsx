import React, { Children } from 'react'
import './Testimonies.css';
import Carousel from './AliceCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ellipse from '../pictures/VDTLTE/ellipse.png'


const Testimonies = () => {

  const carouselItems = [
    <div className='row box'>

      <div className='car-item'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Minima sapiente soluta harum nulla maxime qui provident 
          ullam quibusdam! Quam magnam distinctio voluptatibus voluptatem 
          quibusdam quod inventore provident omnis dignissimos odio.
        </p>
        
        <div className='row'>
          <div className="col-2">
            <img src={ellipse} alt="Image 1" />
          </div>
          <div className="col davo">
            <h5><b>Olatunji David</b></h5>
            <p><b>BMW Owner</b></p>
          </div>
        </div>
    
      </div>

      <div className='car-item'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Minima sapiente soluta harum nulla maxime qui provident 
          ullam quibusdam! Quam magnam distinctio voluptatibus voluptatem 
          quibusdam quod inventore provident omnis dignissimos odio.
        </p>
        
        <div className='row'>
          <div className="col-2">
            <img src={ellipse} alt="Image 1" />
          </div>
          <div className="col davo">
            <h5><b>Olatunji David</b></h5>
            <p><b>BMW Owner</b></p>
          </div>
        </div>
    
      </div>

    </div>,
    <div className='row box'>

    <div className='car-item'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Minima sapiente soluta harum nulla maxime qui provident 
        ullam quibusdam! Quam magnam distinctio voluptatibus voluptatem 
        quibusdam quod inventore provident omnis dignissimos odio.
      </p>
      
      <div className='row'>
        <div className="col-2">
          <img src={ellipse} alt="Image 1" />
        </div>
        <div className="col davo">
          <h5><b>Olatunji David</b></h5>
          <p><b>BMW Owner</b></p>
        </div>
      </div>
  
    </div>

    <div className='car-item'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Minima sapiente soluta harum nulla maxime qui provident 
        ullam quibusdam! Quam magnam distinctio voluptatibus voluptatem 
        quibusdam quod inventore provident omnis dignissimos odio.
      </p>
      
      <div className='row'>
        <div className="col-2">
          <img src={ellipse} alt="Image 1" />
        </div>
        <div className="col davo">
          <h5><b>Olatunji David</b></h5>
          <p><b>BMW Owner</b></p>
        </div>
      </div>
  
    </div>

  </div>,

    <div className='row box'>

      <div className='car-item'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Minima sapiente soluta harum nulla maxime qui provident 
          ullam quibusdam! Quam magnam distinctio voluptatibus voluptatem 
          quibusdam quod inventore provident omnis dignissimos odio.
        </p>
        
        <div className='row'>
          <div className="col-2">
            <img src={ellipse} alt="Image 1" />
          </div>
          <div className="col davo">
            <h5><b>Olatunji David</b></h5>
            <p><b>BMW Owner</b></p>
          </div>
        </div>
    
      </div>

      <div className='car-item'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Minima sapiente soluta harum nulla maxime qui provident 
          ullam quibusdam! Quam magnam distinctio voluptatibus voluptatem 
          quibusdam quod inventore provident omnis dignissimos odio.
        </p>
        
        <div className='row'>
          <div className="col-2">
            <img src={ellipse} alt="Image 1" />
          </div>
          <div className="col davo">
            <h5><b>Olatunji David</b></h5>
            <p><b>BMW Owner</b></p>
          </div>
        </div>
    
      </div>

    </div>
    ,
  ];

  return (
    <div className="row testimony">
   
        <div className='what'>
            <h6 className='best'>BEST IT SOLUTIONS</h6>
            <h3 className='best-comment'>What People Say About Us</h3>
        </div>

        <div>
          <Carousel items={carouselItems} />
        </div>
        
      
           
    </div>
  )
}

export default Testimonies