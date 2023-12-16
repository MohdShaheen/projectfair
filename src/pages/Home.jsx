import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from '../Assets/world.svg'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
    // state to store token
    const [islogin, setIsLogin] = useState(false)

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsLogin(sessionStorage.getItem("token"))
        }
    },[])
    console.log(islogin);

  return (
    <>
    <div style={{width:'100%', height:'100vh'}} className='mb-5 bg-success'>
        <div className="container-fluid rounded">
            <Row className='align-items-center p-5'>
                <Col sm={12} md={6}>
                    <h1 className='text-light mb-4' style={{fontSize:'100px'}}>Project Fair</h1>
                    <p>One stop destination for all software devolepment projects</p>
                    {islogin?
                        <Link to={'/dashboard'}><button className='btn btn-warning rounded'>Manage Project<i class="fa-solid fa-arrow-right ms-3"></i></button></Link>:
                        <Link to={'/login'}><button className='btn btn-warning rounded'>Get started<i class="fa-solid fa-arrow-right ms-3"></i></   button></Link>
                    }
                </Col>
                <Col sm={12} md={6} style={{marginTop:'100px'}}>
                    <img className='w-75' src={titleImage} alt="no image" />
                </Col>
            </Row>
        </div>
    </div>

    {/* section for all projects */}
    <div className='all-project mt-5'>
        <div className="text-center">
            <h1>Explore Our Project</h1>
            <marquee scrollAmount={20} className="mt-5">
                <div className='d-flex'>
                    <div className='ms-5' style={{width:'500px'}}>
                        <ProjectCard/>
                    </div>
    
                    <div className='ms-5' style={{width:'500px'}}>
                        <ProjectCard/>
                    </div>
                    
                    <div className='ms-5' style={{width:'500px'}}>
                        <ProjectCard/>
                    </div>
                </div>
            </marquee>
            <div className="text-center mt-5 mb-4">
                <h6><Link to={'/project'}>See More projects</Link></h6>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
