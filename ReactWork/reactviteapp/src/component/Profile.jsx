import React from 'react'
import './profile.css'

function Profile({data}) {
  return (
    <div className='parent'>
        <h2>Profile Page</h2>
        <img src={data.pic} alt="" width={200}/>
        <h3>Name:{data.myname}</h3>
        <h3>Branch:{data.mybranch}</h3>
        <h3>Section:{data.mysection}</h3>
        <h3>College:{data.mycollege}</h3>
        
    </div>
  )
}

export default Profile