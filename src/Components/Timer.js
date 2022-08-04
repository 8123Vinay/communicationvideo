import React,{useState} from 'react'

export default function Timer({isCapturing}) {
    const [timer,setTimer]=useState(60);
    if(timer && isCapturing){
        setTimeout(()=>{
          setTimer(timer-1);
        },1000)
    }
  return (
    <div>
        <h1>{timer}</h1>  
    </div>
  )
}

// I have to start the timer once the button is pressed
