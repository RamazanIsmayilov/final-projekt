import React from 'react'
import { Link } from 'react-router-dom'
import slugify from 'react-slugify'

const BlogCard = ({photo, title, desc, id}) => {
  return (
    <div className='col-12 col-sm-12 col-md-3 col-lg-3'>
      <div className="blogcard">
        <div className="card-imgocerlay">
          <img src={photo} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <Link to={`/news/${slugify(title)}`} className="btn btn-primary">Read more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard