import React from 'react'
import Addprojects from './Addprojects'

function Myprojects() {
  return (
    
      <div className='card shadow p-5 ms-3 me-3 mb-3'>
        <div className='d-flex'>
          <h3 className='ms-3 text-success'>My projects</h3>
          <div className='ms-auto'>
            <button className='btn btn-success'><Addprojects/></button>
          </div>
        </div>

        <div className="mt-5">
          <div className="border d-flex align-items-center rounded p-2">
            <h5>Project title</h5>
            <div className="ms-auto">
              <button className='btn'><i class="fa-solid fa-pen-to-square text-info"></i></button>
              <button className='btn'><i class="fa-solid fa-github text-success"></i></button>
              <button className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
            </div>
          </div>
          <p className='text-danger fw-bolder fs-4'>No Projects Uploaded yet !!</p>
        </div>
      </div>
  
  )
}

export default Myprojects
