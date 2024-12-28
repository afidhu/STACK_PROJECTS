import React, { useEffect, useState } from 'react';
import Sidebar from './teachersidebar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Addcourse = () => {

    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const [tech, settech] = useState('')
    const [video, setvideo] = useState(null)
    const [course, setcourse] = useState(null)
    const [message, setmessage] = useState(null)


    const{course_id}=useParams()
    console.log(course_id)
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/addCourse/")
            .then((resp) => {
                // console.log(resp.data);
            })
            .catch((err) => {
                console.log('error from : ' + err)
            })
    }, [])

    const addcourse = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('tech', tech);
        formData.append('video', video);
        formData.append('course',course_id);
        

        fetch("http://127.0.0.1:8000/chapterlist/",{
            method:"POST",
            body:formData,
        })
        .then(resp =>{
            resp.json()

        setTitle('')
        setdescription('')
        settech('')
        setvideo('')
        setmessage(true)

        })
        .catch((err)=>{
            console.log("thereis error in : "+err)
            setmessage(false)
        })
    }



    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <h1>USER DASBOARD</h1>
                    <div className="col-md-6">
                        <aside><Sidebar /> </aside>
                    </div>
                    <div className="col-md-6">

                        <div class="list-group">
                            <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
                                Add course
                            </button>
                            <center> {message?<label htmlFor=""  className='bg-success' > succefully</label>: "error"}</center>
                            <div class="mb-3 row mt-3" >
                                <label for="inputPassword" class="col-sm-2 col-form-label">add course Title</label>
                                <div class="col-sm-10">
                                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            
                            
                            <div class="mb-3 row mt-3" >
                                <label for="inputPassword" class="col-sm-2 col-form-label">  <i className='fa fa-youtube' ></i> videos</label>
                                <div class="col-sm-10">
                                    <input type="file"  onChange={(e)=>setvideo(e.target.files[0])} class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row mt-3" >
                                <label for="inputPassword" class="col-sm-2 col-form-label">descriptions</label>
                                <div class="col-sm-10">
                                    <textarea type="text" value={description}  onChange={(e)=> setdescription(e.target.value)} class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row mt-3">
                                <label for="inputPassword" class="col-sm-2 col-form-label">remarks/tech</label>
                                <div class="col-sm-10"> 
                                    <input type="text" value={tech}  onChange={(e)=>settech(e.target.value)} placeholder='php, html, css, js' class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            
                            <div class="mb-3 row mt-3">
                                <div class="col-sm-10">
                                    <input type="submit" onClick={addcourse}   class="btn btn-info" value='add' id="inputPassword" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addcourse;
