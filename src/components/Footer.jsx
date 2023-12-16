import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer d-flex justify-content-evenly bg-success pt-4 pb-5'>
        <div className='col-lg-3 text-light'>
            <h4>Company Name</h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quas nisi, eos recusandae placeat, consequatur unde eum impedit libero dolore officiis. Sint corporis non sed illo natus consequuntur necessitatibus pariatur?</p>
        </div>
      
        <div className='col-lg-3'>
        <h4>Products</h4>
            <div className=' d-flex flex-column justify-content-center '>
                <Link to={''} style={{color:'white'}}>Angular</Link>
                <Link to={''}>React</Link>
                <Link to={''}>Vue</Link>
                <Link to={''}>Bootstrap</Link>
            </div>
        </div>
        <div className='col-lg-3'>
            <h4>Guides</h4>
            <div className='d-flex flex-column justify-content-center'>
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Login Page</Link>
                <Link to={'/register'}>Register</Link>
            </div>
        </div>
        <div className='col-lg-3'>
            
        </div>

      
    </div>
  )
}

export default Footer
