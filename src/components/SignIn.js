import axios from 'axios';
import React, { useState } from 'react'
import  { useNavigate } from 'react-router-dom'


function SignIn() {
  let navigate= useNavigate();
  const [uemail, setUEmail] =useState();
  const [upassword, setUPassword] =useState();
  const [error, setError]=useState('');
const handleEmail = (e)=>{
  setUEmail(e.target.value);
  console.log(uemail);
}

const handlePassword = (e)=>{
  setUPassword(e.target.value);
  console.log(upassword);
}

//authe header 

const buttonhandler =(e)=>{
  e.preventDefault();
  axios.post('https://dashboard.api-aeroranger.com/auth/login/', {
   email: uemail,
   password: upassword
  })
  .then(function (response) {
    console.log(response);
    //First store Token
    let tokenID=response.data.id_token;
    localStorage.setItem("token", tokenID);
    navigate('/dashboard');
  })
  .catch(function (error) {
    console.log(error);
    setError('This user doesnot exist');
  });
}

  return (
    <div>
    <form action="" className='logIn'>
    <label>Email</label>
    <input type="text" id="email" name="email" placeholder="email" onInput={handleEmail} />

    <label>Last Name</label>
    <input type="password" id="password" name="password" placeholder="password" onInput={handlePassword}/>
  
    <input type="submit" onClick={buttonhandler} value="Submit"/>
  </form>
    {error}
    </div>
  )
}

export default SignIn