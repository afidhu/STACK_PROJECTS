import React, { useEffect, useState } from 'react';
import axios from 'axios'


const Register = () => {

    const [full_name, setfull_name]=useState('')
    const [email, setemail]=useState('')
    const [password, setpassword]=useState('')
    const [qualification, setqualification]=useState('')
    const [phone, setphone]=useState('')
    const [skills, setskill]=useState('')
    const [message, setMessage]=useState(null)


    const postdata=(e)=>{
        e.preventDefault()

        const formData = new FormData();
            formData.append('full_name',full_name );
            formData.append('email', email);
            formData.append('password', password);
            formData.append('qualification', qualification);
            formData.append('phone',phone );
            formData.append('skills',skills );
            console.log(formData)

        fetch('http://127.0.0.1:8000/teacher/', {
            method:"POST",
            body:formData,
        })
        .then((resp)=>{
            setMessage(true)
        })
        .catch((err)=>{
            setMessage(false)
            console.log("error has occur "+ err)
        })
    }


    return (
        <div>
            <div className="container">
                <div className="row mx-5">
                    <div className="col-md-8 mx-5">
                        <div className="card m-auto mx-5" >
                            <form className='mx-3 mt-3' onSubmit={postdata} >
                            <div className="message">
                                <span  className='text-success mt-5' >{ message ===true?  <label>success full</label>:"" }</span>
                            </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">fullrname</label>
                                    <input    value={full_name} onChange={(e)=>setfull_name(e.target.value)}  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input    value={email} onChange={(e)=>setemail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input    value={password} onChange={(e)=>setpassword(e.target.value)}  type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">qualification</label>
                                    <input    value={qualification} onChange={(e)=>setqualification(e.target.value)} type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">phone</label>
                                    <input    value={phone} onChange={(e)=>setphone(e.target.value)}  type="number" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">skills</label>
                                    <textarea value={skills}  onChange={(e)=>setskill(e.target.value)} type="text" class="form-control" id="exampleInputPassword1" />
                                    <div id="emailHelp" class="form-text">PHP, DJANGO, JS, PYTHON</div>
                                </div>
                                
                                <button type="submit" class="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
