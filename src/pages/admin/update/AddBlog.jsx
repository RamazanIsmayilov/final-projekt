import React, { useContext } from 'react'
import BlogForm from '../../../components/BlogForm'
import { useDispatch } from 'react-redux'
import { addBlog } from '../../../tools/action/blogAction'
import { useNavigate } from 'react-router-dom'
import { ModeContext } from '../../../context/ModeContext'

const AddBlog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const { mode } = useContext(ModeContext)


  return (
    <div className={mode ? "light" : "dark"}>
        <h1 className='text-center py-5'>Add Blog</h1>
        <BlogForm formToProp={fd => {
          dispatch(addBlog(fd))
          navigate('/dashboard')
        }} />
    </div>
  )
}

export default AddBlog