import React, { useEffect, useState } from 'react';

const Register = () => {

 const [full_name, setfull_name]=useState('')
    const [email, setemail]=useState('')
    const [password, setpassword]=useState('')
    const [username, setUsername]=useState('')
    const [interest, setInterest]=useState('')
    const [message, setMessage]=useState(null)

    useEffect(()=>{
        document.title='STUDENT REGISTER';
    })

    

    const postdata=(e)=>{
        e.preventDefault()

        const student_DataForm = new FormData();
            student_DataForm.append('full_name',full_name );
            student_DataForm.append('email', email);
            student_DataForm.append('password', password);
            student_DataForm.append('username', username);
            student_DataForm.append('interest',interest );
            console.log(student_DataForm)

        fetch('http://127.0.0.1:8000/studentViewRegisterList/', {
            method:"POST",
            body:student_DataForm,
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
                            <form className='mx-auto' onSubmit={postdata} >
                              <center> {message ===true? <label> suceess studengt registed </label> :'' }  </center>
                              <center> {message ===false? <label> Not studengt registed </label> :''}  </center>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">full_name</label>
                                    <input type="text" class="form-control"value={full_name}  onChange={(e)=>setfull_name(e.target.value)}   id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">email address</label>
                                    <input type="email" class="form-control"value={email}   onChange={(e)=>setemail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">password</label>
                                    <input type="password" class="form-control" value={password}  onChange={(e)=>setpassword(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">username</label>
                                    <input type="username" class="form-control"value={username}   onChange={(e)=>setUsername(e.target.value)} id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">interest</label>
                                    <textarea type="text" class="form-control" value={interest}  onChange={(e)=>setInterest(e.target.value)} id="exampleInputPassword1" />
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
