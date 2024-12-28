import React from 'react';
import Sidebar from './teachersidebar';


const Profileseting = () => {
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <h1>USER DASBOARD</h1>
                    <div className="col-md-6">
                        <aside><Sidebar/> </aside>
                    </div>
                    <div className="col-md-6">

                        <div class="list-group">
                            <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
                                Profile setting
                            </button>
                            <div class="mb-3 row mt-3" >
                                <label for="inputPassword" class="col-sm-2 col-form-label">full name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row mt-3" >
                                <label for="inputPassword" class="col-sm-2 col-form-label">Photo</label>
                                <div class="col-sm-10">
                                    <input type="file" class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row mt-3" >
                                <label for="inputPassword" class="col-sm-2 col-form-label">Interrest</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row mt-3">
                                <label for="inputPassword" class="col-sm-2 col-form-label">email</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row mt-3">
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

export default Profileseting;
