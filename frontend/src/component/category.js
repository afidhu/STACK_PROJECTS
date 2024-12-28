import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const url = 'http://127.0.0.1:8000/pro/';

const Category = () => {
    const { catg_id } = useParams();
    console.log(catg_id);
    const [catg, setCatg] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((resp) => {
                setCatg(resp.data);
            })
            .catch((err) => console.log("There is an error: " + err));
    }, []);  // Add the empty dependency array to ensure this runs only once when the component mounts

    return (
        <div>
            {
                catg.map((val) => {
                    // Here we use the correct filter method
                    
                       if(val.category === catg_id){
                        return (
                            <h4>{val.category.id}ddd</h4>
                        )
                       }
                 
                })
            }
        </div>
    );
}

export default Category;
