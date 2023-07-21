import React from 'react'
import './News.css'
import laptop from '../pictures/VDTLTE/pressing.png'
import pressing from '../pictures/VDTLTE/connectpad.png'
import youtube from '../pictures/VDTLTE/youtube.png'
import internet from '../pictures/VDTComplete/el_tags.png'
import chatt from '../pictures/VDTComplete/fa-solid_comments.png'
import Arrow from '../pictures/VDTComplete/arrow.png'
import Newspage from './Newsupdate/Newspage'

const News = () => {
    return (

    <div className='row sweet'>
        

        
        <div className='bdn'>
            <h5><span className='bdn-bit'>BEST IT SOLUTIONS</span></h5>
            <h1 className='news-headline'>Best <span className='digital'>Digital</span> News and </h1>
            <h1 className='news-headline'>Updates For People</h1>
        
        </div>


            <Newspage />



        {/* <div className='row news-row'>
            <div className='col fuller'>
                <div className='bgi1'>
                    <img src={laptop} alt="laptop-press" />
                        <div className="date" ><span>26 June, 2023</span></div>
    
                </div>
                <div className='row image-news first-line'>
                    <div className='notify'>
                       <img src={internet} alt="tags" /> Internet  / <img src={chatt} alt="comments" /> 2 Comments
                    </div>
                    <p className='boss'> VDT Boss, Company bags Outstanding Awards at Africa
                        Digital Awards 2022
                    </p>
                </div>
                <div className="bt"></div>
                <div className='row image-news lpn'>
                    VDT is a licensed Private Network
                    Service Provider specializing...
                </div>
                <div className='row cta'>
                    <div className="col">Read more</div>
                    <div className="col-2"><img src={Arrow} alt="arrow" className='r-more' /></div>
                    
                </div>

            </div>
            <div className='col fuller'>
                <div className='row bgi1'>
                <img src={pressing} alt="laptop-press" />
                        <span className='date'>26 June, 2023</span>
                    
                </div>
                <div className='row image-news first-line'>
                    <div className='notify'>
                    <img src={internet} alt="tags" /> Internet  / <img src={chatt} alt="comments" /> 2 Comments
                    </div>
                    <p  className='boss'> VDT Boss, Company bags Outstanding Awards at Africa
                        Digital Awards 2022
                    </p>
                </div>
                <div className="bt"></div>
                <div className='row image-news lpn'>
                    VDT is a licensed Private Network
                    Service Provider specializing...
                </div>
                <div className='row cta'>
                    <div className="col">Read more</div>
                    <div className="col-2"><img src={Arrow} alt="arrow" className='r-more' /></div>
                    
                </div>

            </div>
            <div className='col fuller'>
                <div className='row bgi1'>
                <img src={youtube} alt="laptop-press" />
                        <span className='date'>26 June, 2023</span>
                    
                </div>
                <div className='row image-news first-line'>
                    <div className='notify'>
                    <img src={internet} alt="tags" /> Internet  / <img src={chatt} alt="comments" /> 2 Comments
                    </div>
                    <p className='boss'> VDT Boss, Company bags Outstanding Awards at Africa
                        Digital Awards 2022
                    </p>
                </div>
                <div className="bt"></div>
                <div className='row image-news lpn'>
                    VDT is a licensed Private Network
                    Service Provider specializing...
                </div>
                <div className='row cta'>
                    <div className="col">Read more</div>
                    <div className="col-2"><a href=''><img src={Arrow} alt="arrow"  className='r-more' /></a></div>
                    
                </div>

            </div> */}
         {/* </div> */}
       <div className='button view'>
       <button className='view-all'>View All</button>
   </div>
       
    </div>
    
    )
}

export default News