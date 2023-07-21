import React, { useState } from 'react'
import './Groupnews.css'
import internet from '../../pictures/VDTComplete/el_tags.png'
import Arrow from '../../pictures/VDTComplete/arrow.png'
import chatt from '../../pictures/VDTComplete/fa-solid_comments.png'
import Pagination from '../Pagination';
import talker from '../../pictures/VDTLTE/Rectangle 372 (3).png'


const Groupnews = () => {
     const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust as needed
  const totalItems = 100; // Adjust as needed

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='g-news'>
        <div className='row group'>
        <div className='col fuller'>
                <div className='row news-bg'>
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

            </div>

            <div className='col fuller'>
                <div className='row news-bg1'>
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

            </div>

            <div className='col fuller'>
                <div className='row news-bg2'>
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

            </div>

            <div className='col fuller'>
                <div className='row news-bg2'>
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

            </div>

            <div className='col fuller'>
                <div className='row news-bg'>
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

            </div>

            <div className='col fuller'>
                <div className='row news-bg1'>
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

            </div>

            <div className='col fuller'>
                <div className='row news-bg1'>
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

            </div>

            <div className='col fuller'>
                <div className='row news-bg2'>
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

            </div>

            <div className='col fuller'>
                <div className='row news-bg'>
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

            </div>

            <div className='col fuller'>
                <div className='row news-bg'>
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

            </div>

            <div className='col fuller'>
                <div className='row news-bg1'>
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

            </div>

            <div className='col fuller'>
                <div className='row news-bg'>
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

            </div>
        
            <div className='paginate'>
                <Pagination
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
            
      </div>
    </div>
  )
}

export default Groupnews