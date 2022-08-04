import React, { useRef, useState, useCallback } from "react";
import uploadVideo from '../Utils/serverUpload.js'
import Timer from '../Components/Timer.js'
import ShowVideo from '../Components/showVideo.js'
import Webcam from "react-webcam";

export default function VideoRecord({phoneNumber,topic}) {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoSrc, setVideoSrc] = useState(null);
  const [blob, setBlob]=useState("");
  const [upload, setUpload]=useState(false);
  const [timer,setTimer]=useState(60);
  const [isStopped, setIsStopped]=useState(false);
  
  const [timeOut,setTimeOut]=useState(null);




  let options = {};

  console.log(videoSrc);
  if (MediaRecorder.isTypeSupported("video/webm")) {
    options = { mimeType: "video/webm" };
  } else if (MediaRecorder.isTypeSupported("video/mp4")) {
    options = { mimeType: "video/mp4" };
  }

  const handleDataAvailable = ({ data }) => {
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data));
    }
  };

  const handleStartCaptureClick = () => {
    setIsCapturing(true);
    if (window.MediaRecorder) {
      mediaRecorderRef.current = new window.MediaRecorder(
        webcamRef.current.stream,
        options
      );
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }

    let e=setTimeout(()=>{
      handleStopCaptureClick();
    },5000)
    setTimeout(e);
  };

  const handleStopCaptureClick = () => {
    console.log(recordedChunks,"this si recordedchunks")
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setIsCapturing(false);
    setIsStopped(true);
}

function displayVideo(){
  if (recordedChunks.length) {
    const newBlob = new Blob(recordedChunks, {
      type: options.mimeType
    })

    const url = URL.createObjectURL(newBlob);
    setVideoSrc(url);
    setBlob(newBlob);

  }
}


  return (
    <>
    {!videoSrc ?  <div className="web-cam">
    <div>
      <Timer isCapturing={isCapturing} />
      <h1>Talk About {topic}</h1>
     <Webcam className="camera"
       audio={true}
       muted={true}
       ref={webcamRef}
       videoConstraints={{ facingMode: "user" }}
     />
     </div>

     {!isCapturing ? 
       <button onClick={handleStartCaptureClick}>Start Recording</button>:
       <button onClick={()=>{
         clearTimeout(timeOut);
         handleStopCaptureClick();
       }}>Stop Recording</button>
     }

     {isStopped ? <button
       onClick={displayVideo}
     >ShowVideo</button> :""}
     
   </div> : 
   <ShowVideo videoSrc={videoSrc} blob={blob} topic={topic} phoneNumber={phoneNumber}/>}
   {/* I have all the things now */}
    </>
  );
}



// okay Now what I have to do is that?



// atleast I have to do what I have thought of doing
// why is it opening on the second time
