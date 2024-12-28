import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const navgateto=useNavigate();

const[password, setpassword]=useState('')
const[email, setemail]=useState('')

const[errosmg, setError]=useState('')

const teacherlogin=(e)=>{
    e.preventDefault()

    const formData=new FormData();
        formData.append('email', email);
        formData.append('password', password);


        fetch("http://127.0.0.1:8000/teacherLogin/", {
            method:'POST',
            body:formData,
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            if (data.bool === true) { // Ensure the response structure matches
                // this work like SESSION
                localStorage.setItem('teacherLoginStatus', "true");
                window.location.replace('/teacher-dashboard');
                localStorage.setItem('teacherId', data.teacher_id);
                localStorage.setItem('teachername', data.sirname);
                console.log("Teacher login status in localStorage:", localStorage.getItem('teacherLoginStatus'));
            }
            else{
                setError("INVALID USERNAME AND PASSWORD")
            }
            // navgateto('/teacher-dashboard/')
            setpassword('')
            setemail('')
        })
        .catch((err)=>{
            console.log("please there is erro "+err)
        })
}


useEffect(()=>{
   document.title='Teacher Login';
})


    return (
        <div>
            <div className="container">
                <div className="row mx-5">
                    <div className="col-md-8 mx-5">
                        <div className="card m-auto mx-5" >
                        <center>{errosmg&& <label className='text-danger' >{errosmg}</label>}</center>
                            <form className='mx-auto' onSubmit={teacherlogin} >
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">email</label>
                                    <input type="text" value={email} onChange={(e)=> setemail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
