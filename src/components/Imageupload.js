import axios from 'axios';
import React, { useEffect, useState} from 'react'

function Imageupload() {
const [file, setFile]=useState('');
const [lat, setLat] = useState(0);
const [long, setLong] = useState(0);
const [vdata, setVdata]=useState({});
const [loading, setLoading]=useState(false)

const handleFile=(e)=>{
setFile(e.target.files[0]);
}

const handleLat=(e)=>{
setLat(e.target.value);
}

const handleLong=(e)=>{
setLong(e.target.value);
}
const clearStorage=(e)=>{
  localStorage.removeItem("response");
  }

useEffect(()=>{
  setVdata(JSON.parse(localStorage.getItem("response")));
},[vdata])

const buttonhandler =(e)=>{
  setLoading(true);
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
      localStorage.setItem('response', JSON.stringify(response.data));
      setVdata(response.data);
      setLoading(false);
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error.toJSON());
    });
}

  return (
    <div>
   {
     !vdata && <form action="" className='loginForm'> 
     <label>Upload Image</label>
     <input type="file" id="file" name="file" placeholder="Upload file" accept="image/*" onChange={handleFile} />
 
     <label>Lat</label>
     <input type="number" id="lat" name="lat" placeholder="Lat" onInput={handleLat}/>
   
     <label>Long</label>
     <input type="number" id="long" name="long" placeholder="Long" onInput={handleLong}/>
     <button class="buttonload"  onClick={buttonhandler}>
      Submit {loading && <i class="fa fa-spinner fa-spin"></i>}
    </button>
   </form>
   }

    {vdata && 
    <div className='vehicleWrap'> <h2 className="vTitle">{vdata.vehicleModel} {vdata.vehicleBodyType}</h2> 
    <h3 className="vTitle">Number Plate: {vdata.anprPlate}</h3>
    <h3>Location: {vdata.anprState}</h3>
    
    <img src={vdata.image} alt='postimage'/>
    <button class="buttonload" onClick={clearStorage}>Clear</button>
    </div>    
    }
   
    </div>
  )
}

export default Imageupload