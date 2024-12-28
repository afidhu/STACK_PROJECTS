import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
const Favorritecousrse = () => {
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
                                The current button
                            </button>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Created by</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                       
                                    </tr>
                      
                                  
                                </tbody>
                            </table>
                        </div>


                    </div>
            </div>
            </div>
        </div>
    );
}

export default Favorritecousrse;
