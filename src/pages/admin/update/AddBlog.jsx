import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { useDispatch } from 'react-redux'
import { addBlog } from '../../../tools/action/blogAction'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
        <h1 className='text-center my-5'>Add Blog</h1>
        <BlogForm formToProp={fd => {
          dispatch(addBlog(fd))
          navigate('/dashboard')
        }} />
    </div>
  )
}

export default AddBlog