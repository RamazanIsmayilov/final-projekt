import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { useDispatch, useSelector } from 'react-redux'
import { editBlog } from '../../../tools/action/blogAction'
import { useNavigate, useParams } from 'react-router-dom'
import slugify from 'react-slugify'

const AddBlog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {edit} = useParams()
  const blogdata = useSelector(p=>p)
  const singleblogdata = blogdata.find(p => slugify(p.title) === edit)
  console.log(singleblogdata);
  return (
    <div>
        <h1 className='text-center my-5'>Edit Blog</h1>
        <BlogForm editblog = {singleblogdata} formToProp={fd => {
          dispatch(editBlog(singleblogdata.id, fd))
          navigate('/dashboard')
        }} />
    </div>
  )
}

export default AddBlog