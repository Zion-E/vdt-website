import React from 'react'
import './Breadcrumb.css'
import tone from '../../pictures/VDTComplete/Rectangle 2.png'

const Breadcrumb = (props: { imageUrl: string | undefined; breadCrumbTitle: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; breadCrumbSubtitle: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
  return (
    <div className='row-dash'>
        
          <img src={props.imageUrl} alt="back" className='tone' />
            <div className='bt-us'>
            <h2 className='about-us'>{props.breadCrumbTitle}</h2>
            <p className='avdt'>{props.breadCrumbSubtitle}</p>
            </div>

            
        
    </div>
  )
}

export default Breadcrumb