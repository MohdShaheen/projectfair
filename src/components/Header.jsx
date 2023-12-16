import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({Dashboard}) {
  
  return (
    <>
      <Navbar className="bg-success p-3">
        <Container>
          <Navbar.Brand className='text-light'>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
              <i class="fa-brands fa-stack-overflow fa-3x"></i>{' '}
                <span className='fs-4'>Project Fair</span>
          </Link>
          </Navbar.Brand>
          {
            Dashboard &&
            <button className='btn btn-warning rounded'>Logout <i class="fa-solid fa-power-off"></i></button>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header
