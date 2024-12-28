import React, { useEffect, useState } from 'react';

const Login = () => {

    
    const[password, setpassword]=useState('')
    const[email, setemail]=useState('')
    
    const[errosmg, setError]=useState('')
    
    const studentlogin=(e)=>{
        e.preventDefault()
    
        const formData=new FormData();
            formData.append('email', email);
            formData.append('password', password);
    
    
            fetch("http://127.0.0.1:8000/studentLogin/", {
                method:'POST',
                body:formData,
            })
            .then((resp)=>resp.json())
            .then((data)=>{
                if (data.bool === true) { // Ensure the response structure matches
                    // setError("SUCCESSFULLY LOGIN")
                    // this work like SESSION

                    localStorage.setItem('studentLoginStatus', "true");
                    localStorage.setItem('studentId', data.student_id);
                    localStorage.setItem('studentname', data.studentname);
                    window.location.replace('/student-dashboard/');
                    console.log("Teacher login s tatus in localStorage:", localStorage.getItem('teacherLoginStatus'));
                }
                else{
                    setError("INVALID USERNAME AND PASSWORD")
                }
                // navgateto('/teacher-dashboard/')
                setpassword('')
                setemail('')
            })
            .catch((err)=>{
                setError("INVALID USERNAME AND PASSWORD")
                console.log("please there is erro "+err)
            })
    }
    
    
    useEffect(()=>{
       document.title='Student Login';
    })
    
// const studentLogun=localStorage.getItem()
//     if(studentLogun ==="true"){
//         window.location.replace('')
//     }


    return (
        <div>
            <div className="container">
                <div className="row mx-5">
                    <div className="col-md-8 mx-5">
                        <div className="card m-auto mx-5" >
                            <form className='mx-auto' onSubmit={studentlogin} >
                            <center>{errosmg&& <label className='text-danger' >{errosmg}</label>}</center>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1"   class="form-label">email</label>
                                    <input type="email" class="form-control"  value={email}   onChange={(e)=>setemail(e.target.value)}  id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" value={password}  onChange={(e)=>setpassword(e.target.value)}   id="exampleInputPassword1" />
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
