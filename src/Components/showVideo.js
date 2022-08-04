import React from 'react'
import uploadVideo from '../Utils/serverUpload.js';

export default function ShowVideo({videoSrc,topic,blob,phoneNumber}) {
  return (
    <div className="recordedVideo ">
      <video src={videoSrc} controls className="camera" />
      <button
       onClick={()=>{
        uploadVideo(blob, topic,phoneNumber);
       }}
      >upload</button>
      
    </div>
  )
}
