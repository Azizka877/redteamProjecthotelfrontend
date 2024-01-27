import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import "../App.css"

function ForgotPassword() {
    const [email,setEmail] = useState('');
    let navigate = useNavigate()

    const handleSubmit = (e)=>{
      e.preventDefault();
      axios.post('https://redazizteamhotel1234.onrender.com',{email}
      ).then(response=>{
      console.log(response);
      navigate('/')
      }).catch(err=>{
          console.log(err);
      });
  }
  return (
    <div className="d-flex login_fond justify-content-center align-items-center bg-primary vh-100">
    <div className="bg-white p-3 rounded w-25">
    <h3 className='text-center'>Mot de passe oublié?</h3>
            <div>
                <p>Entrez votre mot de passe et nous vous indiquerons la façon de le modifier </p>
                <form onSubmit={handleSubmit}>
                 
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" className='form-control rounded-0'  name='email' placeholder='Enter your Email'
                          onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    
                    <button className='btn btn-success w-100 border text-decoration-none   mt-3'>Send</button>
                </form>
              
            </div>
       
    </div>
</div>
  )
}

export default ForgotPassword