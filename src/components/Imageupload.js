import axios from 'axios';
import React, { useState} from 'react'

function Imageupload() {
const [file, setFile]=useState('');
const [lat, setLat] = useState();
const [long, setLong] = useState();

const handleFile=(e)=>{
setFile(e.target.files[0]);
}

const handleLat=(e)=>{
setLat(e.target.value);
console.log(lat);
}

const handleLong=(e)=>{
setLong(e.target.value);
console.log(long);
}

const buttonhandler =(e)=>{

  e.preventDefault();
  let tokenID= localStorage.getItem('token');
  let x=123;
  var bodyFormData = new FormData();
  bodyFormData.append('image', file);
  bodyFormData.append('latitude', 0);
  bodyFormData.append('longitude', 0);
  axios({
    method: "post",
    url: "https://dashboard.api-aeroranger.com/api/v1/plates/upload-pr",
    data: bodyFormData,
    headers: {
    "Authorization":`Bearer ${tokenID}`, 
    "Content-Type": "multipart/form-data;boundary=Your_Boundary_String" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    }); 
}

  return (
    <div>
    <form action="" className='loginForm'>
    <label>Upload Image</label>
    <input type="file" id="file" name="file" placeholder="Upload file" accept="image/*" onChange={handleFile} />

    <label>Lat</label>
    <input type="number" id="lat" name="lat" placeholder="Lat" onInput={handleLat}/>
  
    <label>Long</label>
    <input type="number" id="long" name="long" placeholder="Long" onInput={handleLong}/>

    <input type="submit" onClick={buttonhandler} value="Submit"/>
  </form>
    </div>
  )
}

export default Imageupload