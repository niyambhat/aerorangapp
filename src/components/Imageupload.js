import axios from 'axios';
import React, { useState} from 'react'

function Imageupload() {
const [file, setFile]=useState('');
const [lat, setLat] = useState(0);
const [long, setLong] = useState(0);

const handleFile=(e)=>{
setFile(e.target.files[0]);
}

const handleLat=(e)=>{
setLat(e.target.value);
}

const handleLong=(e)=>{
setLong(e.target.value);
}

const buttonhandler =(e)=>{

  e.preventDefault();
  let tokenID= localStorage.getItem('token');
  var bodyFormData = new FormData();
  bodyFormData.append('image', file);
  bodyFormData.append('latitude', lat);
  bodyFormData.append('longitude', long);
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