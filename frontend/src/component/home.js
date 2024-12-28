import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Footer from './footer';
import axios from 'axios';


    const url = 'http://127.0.0.1:8000/allCourseList/'

const Home = () => {

    
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

    

    
        useEffect(()=>{
            document.title="LMS system"
        })
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                  
                    <center><h3>latest cousere</h3><span><Link  to='/allcourse/' >  <h5>See all</h5></Link></span> </center>
                    <div className="col-md-12">
                        <div className="row">
                           
                           {
                            allcourse.map((val, index)=>{
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
                    <center><h3>popular teacher</h3><span><Link  to='/popularteacher/' >  <h5>See all</h5></Link></span> </center>
                    <div className="col-md-12">
                        <div className="row">
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

                <div className="row mt-5">

                    <center><h3>popula cousere</h3>   <span> <Link  to='/popular/' ><h5>See all</h5></Link> </span>   </center>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">
                                <div class="card" style={{ width: "18rem;" }}>
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                       <Link to='/coursedetail/1' > <h5 class="card-title">Card title</h5></Link>
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
                <div className="row mt-5">

                    <center><h3>featured cousere</h3>   <span><h5>See all</h5></span>   </center>
                    <div className="col-md-12">
                        <div className="row">
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
            </div>
            <Footer/>
        </div>
        
    );
}

export default Home;
