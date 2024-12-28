import React from 'react';

import { Link } from 'react-router-dom';
import Sidebar from './teachersidebar';


const Userdashboard = () => {
    return (
        <div>
            <div className="container">
                <h1>Teacher DASBOARD</h1>
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
