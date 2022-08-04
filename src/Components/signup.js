import React,{useState} from 'react'
import userSignup from '../Utils/userSignup.js'
export default function Signup({setStart,phoneNumber,setPhoneNumber}) {
   

  return (
    <div>
     <div className="inputfields">
      <input type="tel" placeholder="please enter PhoneNumber" value={phoneNumber} onChange={(e)=>{
        setPhoneNumber(e.target.value)
      }}  pattern="[0-9]{5}"/>
      {/* a 5 digit number */}
      <button onClick={
        async ()=>{
        try{
          let user=await userSignup(phoneNumber);
          setStart(true);
         }
        catch(err){
          alert("user cannot be created")
        }
        
      }}>Register/SignIn</button>
      </div>
    </div>
  )
}

