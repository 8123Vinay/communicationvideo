import React, {useState, useEffect} from 'react'
import VideoRecord from './pages/VideoRecord.js'
import './App.css'

import Signup from './Components/signup.js'
export default function App() {
  const [topic, setTopic]=useState("");
  const [start, setStart]=useState(false);
  const [phoneNumber, setPhoneNumber]=useState("");
  const [getVideo,setVideo]=useState(false);
  const topicsArray=["Country", "State", "School","Favorite Teacher", "Favorite Sports Person"];

  let index=Math.floor(Math.random()*topicsArray.length);

  return (
    <div>
      {!start ?<Signup setStart={setStart} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} /> : <VideoRecord phoneNumber={phoneNumber} topic={topicsArray[index]}/> }
    </div>
  )
}

// in the successful submission I want to go to the video record page;


// we will store the address of the video in the dataBase;









// once the user SIgnups I just have to do one thing let him 
// I will just save hi phoneNumber in the state and then find the user and updata it in the video url