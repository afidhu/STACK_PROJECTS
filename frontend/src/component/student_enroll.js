import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
const StudentEnroll = () => {
    
    const{course_id}=useParams()
    const [studentdata, setStudentdata] = useState([])

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/courseEnrollmentCourseLIstview/'+course_id)
            .then((resp) => {
                console.log(resp.data)
            })
    })



    return (
        <div>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default StudentEnroll;
