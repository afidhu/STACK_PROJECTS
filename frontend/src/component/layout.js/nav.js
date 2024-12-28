import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Searchresult from '../searchresult';

const url = 'http://127.0.0.1:8000/catg/';
const Nav = () => {
  const [catg, setCatg] = useState([]);
  const [searchdata, setSearchdata] = useState('');
  const [productData, setProductData] = useState([]);
  console.log(productData)
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url)
      .then((resp) => {
        setCatg(resp.data);
      })
      .catch((err) => console.log("There is an error at: " + err));
  }, []);

  const getcatg = (id) => {
    navigate('/category/' + id);
  };

// this is search
useEffect(() => {
    if (searchdata) {
      fetch(`http://127.0.0.1:8000/product?name=${searchdata}`, {
        method: "GET"
      })
        .then((resp) => resp.json())
        .then((data) => {
         setProductData(data);
        })
        .catch((err) => console.log("Error fetching product data: " + err));
    }
  }, [searchdata]);


  const navgate=useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navgate('/search/')
    setSearchdata(searchdata); // Will trigger the API call in useEffect
  };

  return (
    <div>
      <NavLink style={{ textDecoration: "none" }}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/addproduct' className="nav-link active" aria-current="page">Add product</Link>
                </li>
                <li className="nav-item">
                  <Link to='/addcategory/' className="nav-link active" aria-current="page">Add category</Link>
                </li>
                <li className="nav-item">
                  <Link to='/product/' className="nav-link">Product</Link>
                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </Link>
                  <ul className="dropdown-menu">
                    {
                      catg.map((val) => {
                        return (
                          <li key={val.id}>
                            <Link onClick={(e) => { e.preventDefault(); getcatg(val.id); }} className="dropdown-item">{val.catg_name}</Link>
                          </li>
                        );
                      })
                    }
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search" onSubmit={handleSearch}>
                <input
                  value={searchdata}
                  onChange={(e) => setSearchdata(e.target.value)}
                  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <Searchresult allmyydata={searchdata}/>
      </NavLink>
    </div>
  );
}

export default Nav;
