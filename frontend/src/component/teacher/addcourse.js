import React, { useEffect, useState } from 'react';
import Sidebar from './teachersidebar';
import axios from 'axios';

const Addcourse = () => {
    const [catg, setCatg] = useState([]);

    const [category, setcategory] = useState('')
    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const [tech, settech] = useState('')
    const [image, setimage] = useState(null)
    const [message, setmessage] = useState(null)


    const teacher_id=localStorage.getItem('teacherId')
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/category/")
            .then((resp) => {
                console.log(resp.data);
                setCatg(resp.data)
            })
            .catch((err) => {
                console.log('error from : ' + err)
            })
    }, [])

    const addcourse = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('category', category);
        formData.append('teacher', teacher_id);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('tech', tech);
        formData.append('image', image);

        fetch("http://127.0.0.1:8000/addCourse/",{
            method:"POST",
            body:formData,
        })
        .then(resp =>{
            resp.json()
        setcategory('')
        setTitle('')
        setdescription('')
        settech('')
        setimage('')
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
                                <label for="inputPassword" class="col-sm-2 col-form-label">category</label>
                                <div class="col-sm-10">
                                    <select name="" id="" onChange={(e)=> setcategory(e.target.value)} >
                                        {
                                            catg.map((val, index) => {
                                                return (
                                                    <>
                                                        <option key={index} value={val.id}>{val.title}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            
                            <div class="mb-3 row mt-3" >
                                <label for="inputPassword" class="col-sm-2 col-form-label">  <i className='fa fa-youtube' ></i> featues  image</label>
                                <div class="col-sm-10">
                                    <input type="file"  onChange={(e)=>setimage(e.target.files[0])} class="form-control" id="inputPassword" />
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
