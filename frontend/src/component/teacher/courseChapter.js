import React, { useEffect, useState } from 'react';
import Sidebar from './teachersidebar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const CourseChapter = () => {

    const { courseChapter_id } = useParams()
    const [chapter, setChapter] = useState([])
    
    const [chaptercountper_course, setChaptercount] = useState(0)

    console.log(chapter)
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/chapterpertcular/' + courseChapter_id)
            .then((resp) => {
                setChapter(resp.data)
                setChaptercount(resp.data.length)
            })
            .catch((err) => {
                console.log("there is error at: " + err)
            })
    }, [courseChapter_id])

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <h1>USER DASBOARD</h1>
                    <h4>  TOtal : ({chaptercountper_course}) </h4>
                    <div className="col-md-6">
                        <aside><Sidebar /> </aside>
                    </div>
                    <div className="col-md-6">

                        <div class="list-group">
                            <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
                                my course chapter
                            </button>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Video</th>
                                        <th scope="col">Remark</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {
                                    chapter.map((val, index)=>{
                                        return(
                                            <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <video width="220" height="140" controls>
                                                <source src={val.video} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </td>
                                        <td>{val.tech}</td>
                                        <td>
                                            <Link>dele</Link>
                                            <Link>upda</Link>
                                        </td>
                                    </tr>

                                        )
                                    })
                                   }
                                </tbody>
                            </table>


                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseChapter;
