import React from 'react'
import { Link } from 'react-router-dom'
import slugify from 'react-slugify'

const BlogCard = ({ photo, title, desc }) => {
  return (
    <div className='col-12 col-sm-12 col-md-3 col-lg-3'>
      <div className="blogcard">
        <div className="card-img">
          <img src={photo} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title fw-bold my-3">{title.slice(0, 14)}...</h5>
            <p className="card-text">{desc.slice(0, 114)}...</p>
            <Link to={`/blog/${slugify(title)}`} className='btn' >Read more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard