import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const url='http://127.0.0.1:8000/catg/'
const Addpro = () => {

    
    const navgateto=useNavigate();
    const [catg, setcatg] = useState([])
console.log(catg)
    const [name, setName] = useState('')
    const [quantity, setquantity] = useState(1)
    const [price, setprice] = useState('')
    const [category, setcategory] = useState(1)
    const [image, setimage] = useState(null)
    const [isAvailable, setIsAvailable] = useState(false); // Checkbox should be boolean
// THIS POST DATA BY USE VALES FIELD

useEffect(()=>{
    axios.get(url)
    .then((resp)=>{
        setcatg(resp.data)
    })

},[])



    const postdata = (e) => {
        e.preventDefault();

        const formData = new FormData(); // FormData for file upload
        formData.append('name', name);
        formData.append('quantity', quantity);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('is_available', isAvailable);
        
        
        if (image) {
            formData.append('image', image); // Append the image file
        }


        // Post data to backend
        fetch('http://127.0.0.1:8000/product/', {
            method: "POST",
            body: formData, // Send FormData directly
        })
            .then((response) => response.json()) // Parse the response as JSON
            .then((data) => {
                navgateto('/product/')
            })
            .catch((err) => {
                console.log("Error posting data:", err);
            });
    }
    return (
        <div>
            <div className="container">
                <form onSubmit={postdata} >
                    <div class="mb-3">
                        <label for="exampleInputname1" class="form-label">name </label>
                        <input type="text" value={name}   onChange={(e)=>setName(e.target.value)}  class="form-control" id="exampleInputname1" aria-describedby="nameHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputprice1" class="form-label">category</label>
                        <select
                        name="category"
                        value={category}
                        onChange={(e) => setcategory(e.target.value)}
                        className="form-control"
                    >
                    {
                        catg.map((val)=>{
                            return(
                                <option key={val.pk} value={val.id}>
                                {val.catg_name}
                            </option>
                            )
                        })
                    }
                    </select>
                    </div>
                                       <div class="mb-3">
                        <label for="exampleInputprice1" class="form-label">price</label>
                        <input type="number" value={price}   onChange={(e)=>setprice(e.target.value)}  class="form-control" id="exampleInputprice1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputprice1" class="form-label">image</label>
                        <input type="file"  onChange={(e)=> setimage(e.target.files[0])}  class="form-control" id="exampleInputimage1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputprice1" class="form-label">Is available</label>
                        <input
                        type="checkbox"
                        checked={isAvailable}
                        onChange={(e) => setIsAvailable(e.target.checked)} // Checkbox value as boolean
                        className="form-check-input"
                        id="isAvailable"
                    />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputprice1" class="form-label">quqntity</label>
                        <input type="quantity" value={quantity}   onChange={(e)=>setquantity(e.target.value)}  class="form-control" id="exampleInputimage1" />
                       
                    </div>

                    <button type="submit"  class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    );
}

export default Addpro;
