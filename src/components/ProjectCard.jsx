import React from 'react'
import Card from 'react-bootstrap/Card';
import projectImage from '../Assets/pexels-cátia-matos-1072179.jpg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';


function ProjectCard() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Card className='shadow text-center' onClick={handleShow}>
      <Card.Img variant="top" src={projectImage} />
      <Card.Body>
        <Card.Title>Video player</Card.Title>
        
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img src={projectImage} width={'100%'} height={'250px'} alt="no image" />
            </Col>
            <Col md={6}>
              <h4>Description</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, numquam? Consectetur architecto labore debitis sint quis facilis alias impedit beatae iusto dolores cupiditate necessitatibus, a quidem culpa voluptates tenetur nemo?
              Delectus ab neque, facere ad architecto qui accusantium tenetur unde adipisci nostrum assumenda sint impedit sit ratione ea voluptates, fuga, consequatur pariatur temporibus nesciunt aspernatur? Repellendus id inventore aperiam ipsam!
              </p>
              <p><span className='fw-bolder'>Technologies</span> : HTML, CSS, React</p>
            </Col>
          </Row>
          <div className='d-flex mt-5'>
            <a href="https://github.com/MohdShaheen/reastuarant" style={{color:'black'}} target='_blank'><i class="fa-brands fa-github fa-2x ms-3"></i></a>
            <a href="https://counter-48zw92qt0-mohammed-shaheens-projects.vercel.app" style={{color:'black'}} target='_blank'><i class="fa-solid fa-link fa-2x ms-5"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard
