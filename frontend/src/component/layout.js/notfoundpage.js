import React from 'react';
import { BrowserRouter,Link, Links } from 'react-router-dom'

const Notfoundpage = () => {
    return (
        <div>
             <div className="container mt-5">
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div class="card mt-5">
                                <div class="card-header">
                                    Product store
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-danger"> Page Not Found</h5>
                                    <p class="card-text">This due to wrong urls or other problem</p>
                                    <Link to='/' class="btn btn-primary"><span className='fa fa-error'  >Go Back</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Notfoundpage;
