import React from 'react'

const BlogCard = ({photo, title, desc}) => {
  return (
    <div className='col-12 col-sm-12 col-md-3 col-lg-3'>
      <div className="blogcard">
        <div className="card-imgocerlay">
          <img src={photo} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href="#" className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard