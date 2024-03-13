import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import slugify from 'react-slugify';

const BlogDetails = () => {

    const { item } = useParams();
    const blogData = useSelector(p => p);
    const blogDetails = blogData.filter(p => slugify(p.title) === item);
    console.log(blogDetails);

    return (
        <div>
            <h1>{blogDetails[0].title}</h1>
            <img src={blogDetails[0].img} alt="asdsa" />
            <p>{blogDetails[0].desc}</p>
        </div>
    )
}

export default BlogDetails