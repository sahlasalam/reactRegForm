import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate= useNavigate();

    const navigateToReg=()=>{
        navigate('/register');
    }

  return (
    <div className='home'>
        <div className='heading'>
            <h3>Home</h3><hr/>
        </div>
        <div className='homecontent'>
        <h4>Hi, Welcome Home</h4>
        <button className='btn1' onClick={navigateToReg}>Join Now</button>
        </div>
    </div>
  )
}

export default Home