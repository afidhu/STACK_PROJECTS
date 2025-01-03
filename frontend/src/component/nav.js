import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {

    const teacherLoginStatus_is=localStorage.getItem('teacherLoginStatus')
    const studentLoginStatus_is=localStorage.getItem('studentLoginStatus')

    const [searchData, setSearchData]=useState('')
    const searchCourse=(e)=>{
    e.preventDefault()
      if(searchData ===""){
        alert('please input require')
      }
        
        else{
            window.location.href='/search-course/'+searchData
        }
    }
    return (
        <div>
            <NavLink>


                <nav class="navbar navbar-expand-lg bg-primary">
                    <div class="container-fluid">
                        <Link class="navbar-brand" href="#">Navbar</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to='/' class="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/allcourse/' class="nav-link" href="#">Courses</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" href="#">Tearcher</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/about/' class="nav-link" >About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/login/' class="nav-link" >Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/register/' class="nav-link" >Register</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <Link to='/register/' class="dropdown-item" >Register</Link>
                                        </li>
                                        <li><a class="dropdown-item" href="#">Register</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2"  value={searchData} onChange={(e)=>setSearchData(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                                <button onClick={searchCourse} class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <div className="mb-4 mx-2 text-white ">
                                <li class="nav-item dropdown ">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        User
                                    </a>
                                    <ul class="dropdown-menu " style={{ marginRight: "60px" }} >
                                    { studentLoginStatus_is!=="true" &&  <>
                                        <Link to='/login/' class="dropdown " >Login</Link> <br />
                                        <Link to='/register/' class="dropdown " >Register</Link><br />
                                        <Link to='/user-dashboard/' class="dropdown " >user-dash</Link>
                                        </>
                                    }
                                        <Link to='/logout/' class="dropdown " >Logout</Link>
                                    
                                    </ul>
                                </li>
                            </div>


                            <div className="mb-4 mx-2 text-white ">
                                <li class="nav-item dropdown ">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Tearcher
                                    </a>
                                    <ul class="dropdown-menu " style={{ marginRight: "60px" }} >
                                    {teacherLoginStatus_is!=="true" && <> 
                                      <Link to='/teacher-login/' class="dropdown " >Login</Link> <br />
                                        <Link to='/teacher-register/' class="dropdown " >Register</Link><br />
                                        <Link to='/teacher-dashboard/' class="dropdown " >teacher-dash</Link>
                                       
                                         </>}
                                         <Link to='/teacher-profile/' class="dropdown " >teacher-Profile</Link><br />
                                        <Link to='/teacher-logout/' class="dropdown " >Logout</Link>

                                    </ul>
                                </li>
                            </div>
                        </div>

                    </div>

                </nav>
            </NavLink>
        </div>
    );
}

export default Nav;
