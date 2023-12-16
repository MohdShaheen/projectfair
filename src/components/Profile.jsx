import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';


function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <div className='card shadow p-5 mb-5'>
      <div className='d-flex justify-content-between'>
        <h1>Profile</h1>
        <button onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-angle-down"></i></button>
      </div>
      {/*items that under collapse */}
      <Collapse in={open}>
        <div className="row justify-content-center mt-4">
          <label htmlFor="profile" className='mb-5 text-center'>
            <input id='profile' type='file' style={{display:'none'}} />
            <img width={'200px'} height={'200px'} className='rounded-circle' src="https://us.123rf.com/450wm/apoev/apoev1903/apoev190300009/124806570-person-gray-photo-placeholder-man-in-t-shirt-on-gray-background.jpg?ver=6" alt="no image" />
          </label>
          <div className="mb-3">
            <input type="text" className='form-control' placeholder='GitHub' />
          </div>
          <div className="mb-3">
            <input type="text" className='form-control' placeholder='LinkedIn' />
          </div>
          <div className="mb-3 mt-3">
            <button className='btn btn-success rounded w-100'>Update</button>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default Profile
