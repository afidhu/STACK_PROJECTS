import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Li, LiLin, Link, useParams } from 'react-router-dom';

const Teacherdetail = () => {

    const [teacherdetail, setteacherdetail] = useState('')
    const [teachercourse, setteachercourse] = useState([])
    const [teacherskills, setteacherSklils] = useState([])
    const { teacher_id } = useParams();

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/teacher_detail/"+teacher_id)
            .then((resp) => {
                setteacherdetail(resp.data)
                setteachercourse(resp.data.teacher_course)
                console.log(resp.data.teacher_course)
                setteacherSklils(resp.data.skills)
            })
            .catch((err) => console.log("please terro at : " + err))
    }, [teacher_id])

    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div class="card mb-3" style={{ width: "700px" }}>
                        <div class="row g-0" >
                            <div class="col-md-4">
                                <img src="../../images/5904.png" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Name: {teacherdetail.full_name}</h5>
                                    <h5 class="card-title">Phone: {teacherdetail.phone}</h5>
                                    <p class="card-text">BIO: - </p>
                                    <ul>
                                        <li><h4>Skill: <small>   <Link to='/coursedetail/1/' > {teacherskills.skills}</Link> </small>, js ,react</h4> </li>
                                        <li><h4>Recent course :     React js</h4></li>
                                        <li><h6>Rting 4.6/2</h6></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <center> <h3>couser detail</h3> </center>
                <div className="row mt-3">
                    <div class="card" style={{ width: "18rem;" }}>
                        <div class="card-header">
                            course videos
                        </div>
                        <ul class="list-group list-group-flush">
                            {
                                teachercourse.map((coz, index) => {
                                    return (
                                        <Link to={'/coursedetail/'+coz.id} class="list-group-item">{coz.title}
                                            <span className='mx-5 float-end' >
                                                0
                                            </span>
                                        </Link>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>


            </div>

            {/* THIS IS MODEL for video  */}
            {/* <!-- Button trigger modal --> */}


            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Teacherdetail;
