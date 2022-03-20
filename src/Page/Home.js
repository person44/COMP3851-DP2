import React, { useEffect, useState } from 'react'
import headerImage from "../Image/UON background.jpg"
import navImage1 from "../Image/View Courses.png"
import navImage2 from "../Image/Create Plan.png"
import navImage3 from "../Image/Saved Courses.png"
import Header from './Partials/Header'
import "animate.css"
import "../App.css"

import { useAuthState } from "react-firebase-hooks/auth";
import useNavigation from 'use-navigation';
import { auth, db, logout } from "../firebaseDB";
import { query, collection, getDocs, where } from "firebase/firestore";
  
function Home() {
    const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigation();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
    return (
        <>
        <Header />
        <div style={{ backgroundImage: `url('${headerImage}')`, backgroundPosition: 'left center', backgroundSize: 'cover', height: '50vh' }}>
            <div class="animate__animated animate__zoomIn" style={{ fontWeight: 'bolder', fontSize: '5vw', color: 'white', position: 'absolute', top: '5vh', left: '17vh' }}>
                Hello and Welcome to the University of Newcastle, Australia!
            </div>
            <div style={{ fontSize: 10, color: 'white', position: 'absolute', top: '48vh', right: 0 }}>
                Image from: <a href="https://www.newcastle.edu.au/study/international">UON Australia</a>
            </div>
        </div>
        <a href="../viewCourse"><img className='navImage' src={navImage1} alt='View courses' /></a>
        <a href="../addcourse"><img className='navImage' src={navImage2} alt='Add course plan' /></a>
        <a href="../coursefeed"><img className='navImage' src={navImage3} alt='View Saved Plan' /></a>
            </>
    );
  }

export default Home
