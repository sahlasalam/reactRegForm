import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'


function View() {
    const navigate= useNavigate();
    const location = useLocation();



    const navigateToHome=()=>{
        navigate('/');
    }

// console.log(location.state);
  return (
    <div className='view'>
        <div className='viewhead'>
            <h1>View Profile</h1><hr/>
        </div>
        <div className='detail'>
            <h3>Name     :</h3>
            <h3>{location.state.name}</h3>
        </div>
        <div className='detail'>
            <h3>Email    :</h3>
            <h3>{location.state.email}</h3>
        </div>
        <div className='detail'>
            <h3>Gender    :</h3>
            <h3>{location.state.gender}</h3>
        </div>
        <div className='detail'>
            <h3>DOB    :</h3>
            <h3>{location.state.dob}</h3>
        </div>
        <div className='detail'>
            <h3>Address    :</h3>
            <h3>{location.state.address}</h3>
        </div>

        <div className='detail'>
            <h3>Phone    :</h3>
            <h3>{location.state.phone}</h3>
        </div>
        <div className='detail'>
            <h3>State    :</h3>
            <h3>{location.state.state}</h3>
        </div>
        <div className='detail'>
            <h3>Country    :</h3>
            <h3>{location.state.country}</h3>
        </div>


        <button className='btn2' onClick={navigateToHome}>Back Home</button>
    </div>
  )
}

export default View