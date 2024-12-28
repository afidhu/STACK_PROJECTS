import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const url = 'http://127.0.0.1:8000/catg/'

const AddCategory = () => {
    const [catg_name, setCatg] = useState('')

    const postcatg = (e) => {
        e.preventDefault()
        const formDta = new FormData();
        formDta.append('catg_name', catg_name)

        fetch(url, {
            method: "POST",
            body: formDta
        })
            .then((resp) => {
                resp.json()
                window.location.reload()
            })
            .catch((eror) => console.log("error occured at :" + eror))
    }

    const [allcatg, setallcatg] = useState([])
    useEffect(() => {
        axios.get(url)
            .then((resp) => {
                setallcatg(resp.data)
            })
            .catch((err) => console.log("eeeor on : " + err))
    }, [])


    const deletecatg=(id)=>{
        fetch(`http://127.0.0.1:8000/catg/${id}/`, {
            method: "DELETE",
        })
        .then((resp)=>{
            window.location.reload()
        })
        .catch((err)=>{
            
            console.log("erro in delete :"+err)
        })
   
    }

    return (
        <div>
            <div className="container">
                <div class="mb-3">
                    <label for="exampleInputname1" class="form-label">category name </label>
                    <input type="text" value={catg_name} onChange={(e) => setCatg(e.target.value)} class="form-control" id="exampleInputname1" aria-describedby="nameHelp" />
                    <button type='submit' onClick={postcatg} className='btn btn-info mt-3 my-3'  >add catg_name</button>
                </div>
            </div>

            <div className="table">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">NO:</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allcatg.map((val, index) => {
                                return (
                                    <tr key={val.id} >
                                        <th scope="row">{index+1}</th>
                                        <td>{val.catg_name}</td>
                                        <td>
                                           <Link  className='mx-3 btn btn-success'>
                                            <span  ><i className='fa fa-pen' ></i></span>
                                           </Link>

                                           <Link onClick={(e)=> {e.preventDefault(); deletecatg(val.id)}} className='btn btn-danger' >
                                            <span ><i className='fa fa-trash' ></i></span>
                                           </Link>
                                          
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AddCategory;
