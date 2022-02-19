import React from 'react'
import image from "../Image/UON background.jpg"
import 'animate.css'

function Home() {
    return (
        <div style={{ backgroundImage:`url('${image}')`, backgroundSize: 'cover', height: '50vh' }}>
            <div class="animate__animated animate__zoomIn" style={{ fontWeight:'bolder', fontSize:50, color: 'white', position: 'absolute', top: '16vh', left: '33vh'}}>
                Hello and Welcome to the University of Newcastle, Australia
            </div>
            <div style={{ fontSize: 10, color:'white', position: 'absolute', top: '48vh', right: 0 }}>
                Image from: <a href="https://www.newcastle.edu.au/study/international">UON Australia</a>
                </div>
                </div>
    );
  }

export default Home
