
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const url = 'http://127.0.0.1:8000/catg/'

const ProductDetail = () => {
    const { pro_id } = useParams()

    const navgateto = useNavigate();
    const [catg, setcatg] = useState([])


    const [name, setName] = useState('')

    const [quantity, setquantity] = useState(1)
    const [price, setprice] = useState('')
    const [category, setcategory] = useState('')
    const [image, setimage] = useState(null)
    const [isAvailable, setIsAvailable] = useState(false); // Checkbox should be boolean

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/product/${pro_id}`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setName(data.name)
                setquantity(data.quantity)
                setprice(data.price)
                setcategory(data.category)
                setimage(data.image)
                setIsAvailable(data.is_available)
            })
            .catch((err) => console.log("error in get id urlsdata :" + err))
    }, [pro_id])

    useEffect(() => {
        axios.get(url)
            .then((resp) => {
                setcatg(resp.data)
            })

    }, [])



    const postdata = (e) => {
        e.preventDefault();

        // Check if required fields are filled
        if (name === '' || !price === '' || !quantity === '' || !category === '') {
            alert('Please fill all fields');
            return;
        }

        const formData = new FormData(); // FormData for file upload
        formData.append('name', name);
        formData.append('quantity', quantity);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('is_available', isAvailable);
        formData.append('image', image);


        // Post data to backend
        fetch(`http://127.0.0.1:8000/product/${pro_id}/`, {
            method: "PUT",
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
            <form onSubmit={postdata} >
                <div class="mb-3">
                    <label for="exampleInputname1" class="form-label">name </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputname1" aria-describedby="nameHelp" />
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
                            catg.map((val) => {
                                return (
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
                    <input type="number" value={price} onChange={(e) => setprice(e.target.value)} class="form-control" id="exampleInputprice1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputprice1" class="form-label">image</label>
                    <input type="file" onChange={(e) => setimage(e.target.files[0])} class="form-control" id="exampleInputimage1" />
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
                    <input type="quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} class="form-control" id="exampleInputimage1" />

                </div>

                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </div>
    );
}

export default ProductDetail;
