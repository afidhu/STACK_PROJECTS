import React from 'react';
import Sidebar from './teachersidebar';


const Changepassword = () => {
    return (
        <div>
             <div className="container">
                <div className="row mt-5">
                    <h1> Changepassword</h1>
                    <div className="col-md-6">
                        <aside><Sidebar /> </aside>
                    </div>
                    <div className="col-md-6">

                        <div class="list-group">
                          
                            <div class="mb-3 row mt-3">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Nwe password</label>
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row mt-3">
                                <div class="col-sm-10">
                                    <input type="submit" class="btn btn-info" value='Update' id="inputPassword" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Changepassword;
