import axios from 'axios';
import React, { useState,useEffect } from 'react'
import  { NavLink, useNavigate } from 'react-router-dom'


function SignIn() {
  let navigate= useNavigate();
  const [uemail, setUEmail] =useState();
  const [upassword, setUPassword] =useState();
  const [error, setError]=useState('');
  const [loading, setLoading]=useState(false);
  const [login, setLogin] =useState(false);

useEffect(() => {
    setLogin(localStorage.getItem("token"));
}, [login])


const handleEmail = (e)=>{
  setUEmail(e.target.value);
  console.log(uemail);
}

const handlePassword = (e)=>{
  setUPassword(e.target.value);
  console.log(upassword);
}

const clearStorage=(e)=>{
  localStorage.removeItem("token");
  setLogin(localStorage.getItem("token"));
  } 

const buttonhandler =(e)=>{
  e.preventDefault();
  axios.post('https://dashboard.api-aeroranger.com/auth/login/', {
   email: uemail,
   password: upassword
  })
  .then(function (response) { 
    //First store Token
    let tokenID=response.data.id_token;
    localStorage.setItem("token", tokenID);
    setLogin(true);
  })
  .catch(function (error) {
    console.log(error);
    setError('This user doesnot exist');
  });
}

  return (
    <div>
    {!login && <form action="" className='logIn'>
    <label>Email</label>
    <input type="text" id="email" name="email" placeholder="email" onInput={handleEmail} />

    <label>Last Name</label>
    <input type="password" id="password" name="password" placeholder="password" onInput={handlePassword}/>
    <button className="buttonload"  onClick={buttonhandler}>
      Submit {loading && <i class="fa fa-spinner fa-spin"></i>}
    </button>
    {error && <p className='errorSign'>{error}</p>}
  </form> }

  {login && <div><h1>Welcome to Aeroranger!</h1>
  <NavLink to='dashboard'>Go to Dashboard</NavLink>

  <button onClick={clearStorage} value='clear'>Logout</button>

  </div>}
    
    
    </div>
  )
}

export default SignIn