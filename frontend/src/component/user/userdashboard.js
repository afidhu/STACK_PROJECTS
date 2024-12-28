import React from 'react';
import MyCourses from './myCourses';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

const Userdashboard = () => {
    return (
        <div>
            <div className="container">
                <h1>USER DASBOARD</h1>
                <div className="row">
                    <div className="col-md-6">
                        <Sidebar />
                    </div>
                    <div className="col-md-6">
                        {/* <MyCourses /> */}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Userdashboard;
