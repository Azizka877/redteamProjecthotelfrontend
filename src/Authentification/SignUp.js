import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
//https://site-frontend1.onrender.com
function SignUp() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState();
    let navigate = useNavigate()

 
            const handleSubmit = (e)=>{
                e.preventDefault();
                axios.post('https://serveurhotel.onrender.com/',{name,email,password}
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
        <h3 className='text-center'>Inscrivez-vous en tant que admi</h3>
                    <form onSubmit={handleSubmit} >
                    <div className="mb-4">
                            <label htmlFor="name"><strong>Name</strong></label>
                            <input type="text" className='form-control rounded-0'  name='name' placeholder='Enter your Name'
                              onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type="email" className='form-control rounded-0'  name='email' placeholder='Enter your Email'
                              onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input type="password" className='form-control'  name='email' placeholder='Enter your Password'
                              onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <button type='submit' className='btn btn-success w-100 border rounded-0 text-decoration-none mt-3'  >Sign Up</button>
                    </form>
                    <p> Already have an Account
                   <Link to="/" className='w-100 text-decoration-none bg-light btn btn-default rounded-0'>Sign In</Link>
                   </p>
        </div> 
    </div>
  )
}

export default SignUp