import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const Coursedetail = () => {
    const student_id = localStorage.getItem('studentId');

    const { id_course } = useParams()
    console.log("this is student"+student_id)
    console.log("this is course id"+id_course)
    const [coursedata, setCoursedata] = useState([])
    const [courseChapter, setCourseChapter] = useState([])
    const [courseTeacher, setCourseTecher] = useState('')
    const [coursetech_list, setCoursetech_list] = useState([])
    // const[courserelatedVideo, setcourserelatedVideo]=useState([])
    // console.log(courserelatedVideo)
    const [userLogin, setuserLogin] = useState('')
    const [enrollStatus, setenrollStatus] = useState('')
    console.log(enrollStatus)

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/CourseListView/' + id_course)
            .then((resp) => {
                setCoursedata(resp.data)
                setCourseChapter(resp.data.course_chapter)
                setCourseTecher(resp.data.teacher)
                setCoursetech_list(resp.data.tech_lists)
                // setcourserelatedVideo(JSON.parse(resp.data.relatedvideo))

            })
            .catch((err) => {
                console.log("there is error at : " + err)
            })

        // fetch enroll status
        axios
            .get('http://127.0.0.1:8000/fetch_student_status/' + id_course + '/' + student_id)
            .then((resp) => {
                console.log(resp.bool)
                if (resp.bool === true) {

                    setenrollStatus('success')
                }
                // setcourserelatedVideo(JSON.parse(resp.data.relatedvideo))

            })
            .catch((err) => {
                console.log("there is error at enrol : " + err)
            })


        // here if user suceess login make button succss in enroll
        const studentLogun = localStorage.getItem('studentLoginStatus')
        if (studentLogun === "true") {
            setuserLogin('success')
        }


    },[])


    const enrollCourse = () => {
        const student_id = localStorage.getItem('studentId');
        const formData = new FormData();
        formData.append('course', id_course);
        formData.append('student', student_id);
        fetch("http://127.0.0.1:8000/studentEnrollCourse/", {
            method: "POST",
            body: formData,
        })
            .then(resp => {

                if (resp.status === 200 || resp.status === 201) {
                    Swal.fire({
                        title: 'You have succefull enrol this course',
                        icon: 'success',
                        toast: true,
                        timer: 10000,
                        position: 'top-right',
                        timeProgressBar: true,
                        showConfirmButton: false
                    })
                    window.location.reload()
                }

            })
            .catch((err) => {
                console.log("thereis error in : " + err)
            })
    }

    // Here  add  Rating for Course
    const [rating, setrating] = useState('')
    const [review, setreview] = useState('')
    
    const postRating = (e) => {
        e.preventDefault()
        const formRate = new FormData()
        formRate.append('course', id_course)
        formRate.append('student',student_id)
        formRate.append('rating', rating)
        formRate.append('review', review)
        axios.post('http://127.0.0.1:8000/courseratingView/', formRate)
            .then((resp) => {
                console.log(resp.data)
            })
            .catch((err) => {
                console.log("there is error At: " + err)
            })
    }

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
                                    <h5 class="card-title">{coursedata.title}</h5>
                                    <p class="card-text">{coursedata.description}</p>
                                    <h6>technology</h6>
                                    {
                                        coursetech_list.map((val, index) => {
                                            return (
                                                <p class="card-text"><Link to={`/category/${val.trim()}`} className='bg-warning'> {val}</Link>  </p>
                                            )
                                        })
                                    }
                                    <ul>
                                        <li><h4>cousrse by <Link to={'/teacherdetail/' + courseTeacher.id}>{courseTeacher.full_name}</Link></h4> </li>
                                        <li><h4>Durations 3 HRS 30 mis</h4></li>
                                        <li><h4>Total Enrilled: {coursedata.total_enroll} Students</h4></li>
                                        <li><h6>Rating 4.6/2</h6></li>
                                        <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#ratingmodel"> Rating </button><br /><p></p>

                                        {/* This is model of rating */}


                                        <div class="modal fade" id="ratingmodel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Rating Course</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form onSubmit={postRating} >
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Rating</label>
                                                                <input type="number" value={rating} onChange={(e) => setrating(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleInputPassword1" class="form-label">Review</label>
                                                                <textarea name="reviaw" value={review} onChange={(e) => setreview(e.target.value)} class="form-control" rows='10' id=""></textarea>
                                                            </div>
                                                            <button type="submit" class="btn btn-primary">Submit</button>
                                                        </form>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            enrollStatus === 'success' && userLogin === 'success' && <span> you have enrolled aready </span>
                                        }
                                        {
                                            userLogin === 'success' && enrollStatus !== 'success' && <button type='button' onClick={enrollCourse} className='btn btn-success' >Enroll in this course</button>
                                        }
                                        {
                                            userLogin !== 'success' && <Link to='/login/' onClick={enrollCourse} className='btn btn-danger' >please login to enrill this course</Link>
                                        }

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
                                courseChapter.map((val, index) => {
                                    return (
                                        <li class="list-group-item">{val.title}
                                            <span className='mx-5 float-end' >
                                                <small className='mx-2' >durations: 3hrs </small> <i className='fa fa-video' data-bs-toggle="modal" data-bs-target="#exampleModal" > </i>

                                            </span>
                                        </li>

                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <center> <h3>Related couser</h3> </center>

                <div className="row mt-3">
                    <div className="col-md-3">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">couserse title</a>
                            </div>
                        </div>
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

export default Coursedetail;
