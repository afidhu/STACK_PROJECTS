import React, { useEffect, useState } from 'react';
import Sidebar from './teachersidebar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const MyCourses = () => {

    
const perteacherId=localStorage.getItem('teacherId')
const perteachername=localStorage.getItem('teachername')
console.log(perteachername)
    const [course, setCourse] =useState([])

    useEffect(()=>{
        axios
        .get('http://127.0.0.1:8000/teachercourse/'+perteacherId)
        .then((resp)=>{
            console.log(resp.data)
            setCourse(resp.data)
        })
        .catch((err)=>{
            console.log('there is error at : '+err)
        })
    },[perteacherId])

    return (
        <div>
            <div className="container">
            <div className="row mt-5">
            <h1>USER DASBOARD</h1>
                <div className="col-md-6">
                    <aside><Sidebar/> </aside>
                </div>
                <div className="col-md-6">
            
                        <div class="list-group">
                            <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
                                my course
                            </button>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">N</th>
                                        <th scope="col">title</th>
                                        <th scope="col">Total enrolled</th>
                                        <th scope="col">created by</th>
                                        {/* <th scope="col">total enrolled</th> */}
                                        <th scope="col">Image</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {
                                        course.map((val, index)=>{
                                            return (
                                                <tr>
                                        <td >{index+1}</td>
                                        <td><Link to={'/courseChapter/'+1}> {val.title}</Link> </td>
                                        <td><Link to={'/enroll_student/'+val.id}> {val.total_enroll}</Link> </td>
                                        <td>{perteachername}</td>
                                        <td><img src={val.image} className='rounded' style={{width:"50px", height:"50px"}}  alt="" /></td>
                                        {/* <td>{val.title}</td> */}
                                       <td><Link className='btn btn-secondary'  to={'/addchapter/'+val.id} >add captues</Link> </td>
                                    </tr>
                      
                                            )
                                        })
                                    }
                                  
                                </tbody>
                            </table>
                        </div>


                    </div>
            </div>
            </div>
        </div>
    );
}

export default MyCourses;
