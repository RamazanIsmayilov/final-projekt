import React, { useState } from 'react'


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
        <div className='container'>
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-6">
                    <form onSubmit={formSubmit} className='mb-5'>
                        <div className="mb-3">
                            <label className="form-label">Photo</label>
                            <input value={img} onChange={(e) => setImg(e.target.value)} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">{editblog ? "Edit" : "Add"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BlogForm