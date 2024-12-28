import React from 'react';

const Home = (props) => {
    return (
        <div>
          <div className="container mt-5">
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div class="card mt-5">
                                <div class="card-header">
                                    Product store by {props.name}
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-primary">welcome to </h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
}

export default Home;
