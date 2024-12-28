import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const url = 'http://127.0.0.1:8000/pro/'

const Product = () => {
    const [pro, setProduct] = useState([])
    useEffect(() => {
        axios.get(url)
            .then((resp) => {
                setProduct(resp.data)
            })
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {
                                pro.map((val)=>{
                                    return (
                                        <div className="col-md-3 mt-3 mx-3 my-3">
                                <div class="card" style={{ width: "18rem;" }}>
                                    <img src={val.image} class="card-img-top" style={{justifyContent:"center"}} alt="..." />
                                    <div class="card-body">
                                        <h6 class="card-text"> {val.name}</h6>
                                        <h4 class="card-text"> {val.price}</h4>
                                        <Link to={`productdetail/${val.id}`} >
                                            <span   ><i className='fa fa-eye' ></i></span>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
