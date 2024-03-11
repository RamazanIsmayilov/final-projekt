import React from 'react'
import BlogCard from '../components/BlogCard'
import { useSelector } from 'react-redux'

const Blog = () => {

  const blogdata = useSelector(p => p);
  console.log(blogdata);
  return (
    <div className="container">
      <div className="row">
        {blogdata.map(item => (
          <BlogCard
            photo={item.img}
            title={item.title}
            desc={item.desc}
            key={item.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Blog