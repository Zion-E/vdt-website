import React from 'react'
import notfound from '../pictures/VDTLTE/Page Not Found.png'
import './ErrorPage.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='row error'>
            <img src={notfound} alt="error-image" className='error-img'/>
            <h2 className='pnf'>Page Not Found</h2>
            <p>The page you are looking for might have been removed or
                had its name changed or is temporary unavailable.
            </p>
            <button className='btn-back'><a href='../pages/Home'>Go Back</a></button>
        </div>
  )
}

export default ErrorPage