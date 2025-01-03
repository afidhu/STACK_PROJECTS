import React, { useEffect, useState } from 'react';
import Sidebar from './teachersidebar';
import axios from 'axios'
import { useParams } from 'react-router-dom';
const Myuser = () => {
const[total_course, settotal_course]=useState()
const[total_student, settotal_student]=useState('')
const[studentEnroll, setstudentEnroll]=useState('')

const teacher_id=localStorage.getItem('teacherId');

console.log(total_student)
    useEffect(()=>{
        axios
        .get("http://127.0.0.1:8000/teacher_detail/" +teacher_id)
        .then((resp)=>{
            settotal_student(resp.data.total_student)
            setstudentEnroll(resp.data.studentEnroll)
            settotal_course(resp.data.studentEnroll)
        })
        .catch((err)=>{
            console.log("error at : "+err)
        })
    }, [teacher_id])

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
                                my Users enrolled
                            </button>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Total Course</th>
                                        <th scope="col">Total Student</th>
                                        <th scope="col">Total enroll</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
            =
                                        <tr>
                                      
                                      <td>{total_course}</td>
                                      <td>{total_student}</td>
                                      <td>{total_student}</td>
                                      <td>{setstudentEnroll}</td>
                                     
                                  </tr>
                                  
                                </tbody>
                            </table>
                        </div>


                    </div>
            </div>
            </div>
        </div>
    );
}

export default Myuser;
