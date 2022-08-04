import axios from 'axios';

export  default async function userSignup( phoneNumber){
      let data={phoneNumber};
       try{
        //    add your url in here to send the request;
           let response=await axios({
               method:"post",
               url: "http://localhost:4000/signup",
               data:data,
               headers: { "Content-Type": "application/json" },

           })
           return (response.data);
       }
       catch(err){
          return (err);
       }
}
// I will try to create a user
