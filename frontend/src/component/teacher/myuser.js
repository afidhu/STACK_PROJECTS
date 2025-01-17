import React, { useEffect, useState } from 'react';
import Sidebar from './teachersidebar';
import axios from 'axios'
import { useParams } from 'react-router-dom';
const Myuser = () => {
const[userdata, setUserdata]=useState([])

const{course_id} =useParams()
    useEffect(()=>{
        axios
        .get("http://127.0.0.1:8000/studentEnrollCourseTo_teacher/" +course_id)
        .then((resp)=>{
            setUserdata(resp.data)
        })
        .catch((err)=>{
            console.log("error at : "+err)
        })
    })

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
                                        <th scope="col">N</th>
                                        <th scope="col">EMAIL</th>
                                        <th scope="col">USERNAME</th>
                                        <th scope="col">INTERREST</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    userdata.map((val, index)=>{
                                        return (
                                            <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{val.student.email}</td>
                                        <td>{val.student.username}</td>
                                        <td>{val.student.interest}</td>
                                       
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

export default Myuser;
