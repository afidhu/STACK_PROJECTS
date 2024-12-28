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
                            <Link  type="Link" class="list-group-item list-group-item-action active" aria-current="true">
                             Side bar
                            </Link>
                            <Link to='/mycourses/' type="Link" class="list-group-item list-group-item-action">my courses</Link>
                            <Link to='/favoritecourse/' type="Link" class="list-group-item list-group-item-action">Favorite courses</Link>
                            <Link to='/recommened/' type="Link" class="list-group-item list-group-item-action">Recommentded courses</Link>
                            <Link to='/profilesetting/' type="Link" class="list-group-item list-group-item-action">Profile Setting</Link>
                            <Link  to='/changepsw/' type="Link" class="list-group-item list-group-item-action">Change password</Link>
                            <Link  to='/login/' type="Link" class="list-group-item list-group-item-action text-danger">Logout</Link>
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
