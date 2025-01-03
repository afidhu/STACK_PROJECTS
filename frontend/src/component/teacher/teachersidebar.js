import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div>
         <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                {/* <Sidebar /> */}
                            </div>
                            <div className="col-md-6">
                            <div class="list-group">
                            <Link  to='/dashboard/' class="list-group-item list-group-item-action active" aria-current="true">
                             teacher Side bar
                            </Link>
                            <Link to='/teacher-mycourses/' type="Link" class="list-group-item list-group-item-action">my courses</Link>
                            <Link to='/teacher-addcourse/' type="Link" class="list-group-item list-group-item-action">add course</Link>
                            <Link to={'/teacher-myuser/1'} type="Link" class="list-group-item list-group-item-action">my user</Link>
                            <Link to='/teacher-favoritecourse/' type="Link" class="list-group-item list-group-item-action">Favorite courses</Link>
                            <Link to='/teacher-recommened/' type="Link" class="list-group-item list-group-item-action">Recommentded courses</Link>
                            <Link to='/teacher-profilesetting/' type="Link" class="list-group-item list-group-item-action">Profile Setting</Link>
                            <Link  to='/teacher-changepsw/' type="Link" class="list-group-item list-group-item-action">Change password</Link>
                            <Link  to='/teacher-login/' type="Link" class="list-group-item list-group-item-action text-danger">Logout</Link>
                        </div>
                            </div>
        
        
                        </div>
                    </div>

            {/* <div className="container">
            <div className="col-md-6">
                        <div class="list-group">
                            <Link  type="Link" class="list-group-item list-group-item-action active" aria-current="true">
                             Side bar
                            </Link>
                            <Link to='/mycourses/' type="Link" class="list-group-item list-group-item-action">my courses</Link>
                            <Link to='/favorite/' type="Link" class="list-group-item list-group-item-action">Favorite courses</Link>
                            <Link to='recommended-course' type="Link" class="list-group-item list-group-item-action">Recommentded courses</Link>
                            <Link to='/profile-setting' type="Link" class="list-group-item list-group-item-action">Profile Setting</Link>
                            <Link  to='/change-password/' type="Link" class="list-group-item list-group-item-action">Change password</Link>
                            <Link  to='/logout/' type="Link" class="list-group-item list-group-item-action text-danger">Logout</Link>
                        </div>


                    </div>
            </div> */}
        </div>
    );
}

export default Sidebar;
