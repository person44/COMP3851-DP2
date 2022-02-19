import React from 'react'
import headerImage from "../Image/UON background.jpg"
import navImage1 from "../Image/View Courses.png"
import navImage2 from "../Image/Create Plan.png"
import "animate.css"

function Home() {
    return (
        <>
        <div style={{ backgroundImage: `url('${headerImage}')`, backgroundSize: 'cover', height: '50vh' }}>
            <div class="animate__animated animate__zoomIn" style={{ fontWeight: 'bolder', fontSize: '230%', color: 'white', position: 'absolute', top: '18%', left: '15%' }}>
                Hello and Welcome to the University of Newcastle, Australia
            </div>
            <div style={{ fontSize: 10, color: 'white', position: 'absolute', top: '48vh', right: 0 }}>
                Image from: <a href="https://www.newcastle.edu.au/study/international">UON Australia</a>
            </div>
        </div>
        <img src={navImage1} width='33%' href='../addcourse '/>
        <img src={navImage2} width='33%' />
        <img src={navImage1} width='33%' />
            </>
    );
  }

export default Home
