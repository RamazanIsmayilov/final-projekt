import React from 'react'
import BlogCard from '../components/BlogCard'
import { useSelector } from 'react-redux'

const Blog = () => {

  const blogdata = useSelector(p => p);
  console.log(blogdata);
  return (
    <div className="container">
      <div className="row my-5">
        {blogdata.map(item => (
          <BlogCard
            key={item.id}
            id={item.id}
            photo={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default Blog