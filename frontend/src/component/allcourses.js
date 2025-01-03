import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const url = 'http://127.0.0.1:8000/allCourseList/'
const Allcourses = () => {

    const [allcourse, setAllcourse] = useState([])

    useEffect(()=>{
        axios
        .get(url)
        .then((resp)=>{
            setAllcourse(resp.data)
        })
        .catch((err)=>{
            console.log("thehe is error at:"+err)
        })
    },[])

    return (
        <div>
            <div className="container">
                <div className="row mt-5">

                    <center><h3>latest cousere</h3><span><Link to='/allcourse/' >  <h5>See all</h5></Link></span> </center>
                    <div className="col-md-12">
                        <div className="row">
                  

                            {
                                allcourse.map((val)=>{
                                    return(
                                        <div className="col-md-3">
                                <div class="card" style={{ width: "18rem;" }}>
                                    <img src={val.image}  style={{width:"100px",height:"100px"}}  class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <Link to={'/coursedetail/'+val.id} > <h5 class="card-title">{val.title}</h5></Link>
                                        <p class="card-text">{val.description}</p>
                                    <a href="#" class="btn btn-primary">{val.tech}</a>
                                    </div>
                                </div>
                            </div>
                                    )
                                })
                            }
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
                </div>

                {/* start pagiantion */}
                <nav aria-label="Page navigation example mt-5">
                    <ul class="pagination justify-content-end mt-3">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
                {/*end pagiantion */}
            </div>
        </div>
    );
}

export default Allcourses;
