import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectAPI } from '../services/allAPI';

function Addprojects() {

  const [projectDetails, setProjectDetails] = useState({
    title:"",
    language:"",
    github:"",
    website:"",
    overview:"",
    projectImage:""
  })

  const [token, setToken] = useState("")

  const [show, setShow] = useState(false);

  // to hold the url of the image
  const [preview, setpreview] = useState("")

  console.log(projectDetails);

 useEffect(()=>{
  if(projectDetails.projectImage){
    // javascript predefined method - url - createObjectURL 
    // files will be converted into url
    setpreview(URL.createObjectURL(projectDetails.projectImage))
  }
 },[projectDetails.projectImage])

 useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setToken(sessionStorage.getItem("token"))
  }
  else{
    setToken("")
  }
 },[])
 console.log(preview);
 console.log(token);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleClose1 =() =>{
    setProjectDetails({
      title:"",
      language:"",
      github:"",
      website:"",
      overview:"",
      projectImage:""
    })
    setpreview("")
  }

  const handleAdd = async(e) =>{
    e.preventDefault()
    
    const {title,language, github, website, overview, projectImage} = projectDetails

    if (!title || !language || !github || !website || !overview || !projectImage ) {
      alert('please fill the form completely')
    }
    else{
      // reqBody 
      // if there is any uploading content from the system , we should send the body in the form of formdata
      // 1) create object for the class form data
      const reqBody = new FormData
      // 2) add value to the formdata - append()
      reqBody.append("title",title)
      reqBody.append("language",language)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      reqBody.append("projectImage",projectImage)

      if(token) {
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          // bearer can only carry one space between them
          "Authorization":`Bearer ${token}`
        }

      const result = await addProjectAPI(reqBody,reqHeader)
      console.log(result);
    }}
  }

  return (
    <>
      <Button variant="static" onClick={handleShow}>
        Add project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className="col-lg-6">
              <label>
                <input type="file" style={{display:'none'}} onChange={(e)=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} />
                <img className='img-fluid rounded' src={preview?preview:"https://cdn.wallpapersafari.com/26/91/O9fURQ.jpg"} alt="no image" />
              </label>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
              <div className="mb-3 mt-3 w-100">
                <input type="text" className='form-control' placeholder='Project Title' value={projectDetails.title} onChange={(e)=>{
                  setProjectDetails({...projectDetails,title:e.target.value})
                }} />
              </div>

              <div className="mb-3 w-100">
                <input type="text" className='form-control' placeholder='Language Used' value={projectDetails.language} onChange={(e)=>{
                  setProjectDetails({...projectDetails,language:e.target.value})
                }}  />
              </div>

              <div className="mb-3 w-100">
                <input type="text" className='form-control' placeholder='Github Link' value={projectDetails.github} onChange={(e)=>{
                  setProjectDetails({...projectDetails,github:e.target.value})
                }}  />
              </div>

              <div className="mb-3 w-100">
                <input type="text" className='form-control' placeholder='Website Link' value={projectDetails.website} onChange={(e)=>{
                  setProjectDetails({...projectDetails,website:e.target.value})
                }}  />
              </div>
              
              <div className="mb-3 w-100">
                <input type="text" className='form-control' placeholder='Project OverView' value={projectDetails.overview} onChange={(e)=>{
                  setProjectDetails({...projectDetails,overview:e.target.value})
                }}  />
              </div>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addprojects
