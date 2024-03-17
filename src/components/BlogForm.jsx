import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const BlogForm = ({ formToProp, editblog }) => {

    const [img, setImg] = useState(editblog ? editblog.img : "");
    const [title, setTitle] = useState(editblog ? editblog.title : "");
    const [desc, setDesc] = useState(editblog ? editblog.desc : "");
    const formSubmit = (e) => {
        e.preventDefault();

        if (!img || !title || !desc) {
            alert('Please, fill input');
        } else {
            formToProp({
                img: img,
                title: title,
                desc: desc
            })
        }
    }

    return (
        <div className="blogform">
            <form onSubmit={formSubmit} className="form-container m-auto pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12">
                                <div className="form-group d-flex flex-column gap-2 p-2">
                                    <label className='fw-bold'>Image<sup className='text-danger'>*</sup>:</label>
                                    <input value={img} onChange={(e) => setImg(e.target.value)} type="text" placeholder="Image" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12">
                                <div className="form-group d-flex flex-column gap-2 p-2">
                                    <label className='fw-bold'>Title<sup className='text-danger'>*</sup>:</label>
                                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12">
                                <div className="form-group d-flex flex-column gap-2 p-2">
                                    <label className='fw-bold'>Description<sup className='text-danger'>*</sup>:</label>
                                    <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" placeholder="Description" />
                                </div>
                            </div>
                        </div>
                        <button className='fw-bold'>{editblog ? "Edit" : "Add"}</button>
                    </div>
            </form>
        </div>
    )
}

export default BlogForm