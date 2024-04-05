import React, { useContext } from 'react'
import BlogForm from '../../../components/BlogForm'
import { useDispatch, useSelector } from 'react-redux'
import { editBlogFromDatabase } from '../../../tools/action/blogAction'
import { useNavigate, useParams } from 'react-router-dom'
import slugify from 'react-slugify'
import { ModeContext } from '../../../context/ModeContext'

const AddBlog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { edit } = useParams()
  const blogdata = useSelector(p => p)
  const singleblogdata = blogdata.find(p => slugify(p.title) === edit)


  const { mode } = useContext(ModeContext)


  return (
    <div className={mode ? "light" : "dark"}>
      <h1 className='text-center py-5'>Edit Blog</h1>
      <BlogForm editblog={singleblogdata} formToProp={fd => {
        dispatch(editBlogFromDatabase(singleblogdata.id, fd))
        navigate('/dashboard')
      }} />
    </div>
  )
}

export default AddBlog