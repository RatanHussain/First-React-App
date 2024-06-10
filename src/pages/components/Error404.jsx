import React from 'react'
import Headers from '../../common/Headers'
import Footer from '../../common/Footer'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div>
      <Headers/>

          <div className="error-message">
              <p>The page are not found <Link className='link' to={'/'}>Go Home</Link></p>
        </div>




      <Footer/>
    </div>
  )
}
