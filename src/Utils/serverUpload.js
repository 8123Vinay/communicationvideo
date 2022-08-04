import axios from 'axios';
export default async function uploadVideo(myBlob,topic,phoneNumber) {
    var file = new File([myBlob], phoneNumber+".mp4");
    // save it by the phoneNumber;
    let formData = new FormData();
    formData.append("recordedVideo", file);
    formData.append("topic", topic);
    formData.append("phoneNumber", phoneNumber);
    try {
      let response = await axios({
        method: "post",
        url: "http://localhost:4000/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

       console.log(response.data);

    } 
    
    catch(error) {
      console.log(error)
    }
    
}

