import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import { deleteBlog } from '../../tools/action/blogAction';

const Dashboard = () => {

    const blogStore = useSelector(p => p);
    const dispatch = useDispatch();

    return (

        <div className='dashboardpage'>
            <div className="heading py-5">
                <div className="container d-flex flex-column gap-4">
                    <Link to="/" className='d-flex align-items-center gap-3'>
                        <span className="svg-ic d-flex align-items-center justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="white">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5791 2.28954C10.5791 2.53299 10.3818 2.73035 10.1383 2.73035L1.52698 2.73048L2.5628 3.73673C2.73742 3.90636 2.74146 4.18544 2.57183 4.36005C2.40219 4.53467 2.12312 4.53871 1.9485 4.36908L0.133482 2.60587C0.0480403 2.52287 -0.000171489 2.40882 -0.000171488 2.2897C-0.000171486 2.17058 0.0480403 2.05653 0.133482 1.97353L1.9485 0.210321C2.12312 0.0406877 2.40219 0.044729 2.57183 0.219347C2.74146 0.393966 2.73742 0.673036 2.5628 0.842669L1.52702 1.84888L10.1383 1.84875C10.3817 1.84874 10.5791 2.04609 10.5791 2.28954Z" fill="white"></path>
                            </svg>
                        </span>
                        <span className='fw-bold'>Back to home</span>
                    </Link>
                    <h5 className='fs-1 fw-bold'>Dashboard</h5>
                    <span>Products & Blogs</span>
                </div>
            </div>
            <div className="dashboard m-auto my-5 border rounded-4">
                <div className='container'>
                    <h1 className='title text-center my-5'>Products & Blogs table</h1>
                    <div className='head d-flex align-items-center justify-content-between'>
                        <span>Blogs</span>
                        <Link className='addbtn d-flex align-items-center justify-content-center gap-2 rounded' to="/dashboard/add">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="pen-line" class="lucide lucide-pen-line mr-2 h-4 w-4 stroke-[1.3]"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
                            Add New Blog</Link>
                    </div>
                    <div className="d-flex-align-items-center justify-content-center">
                        <table className="table my-4">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogStore.map((item, count) => (
                                    <tr>
                                        <th scope="row">{count + 1}</th>
                                        <td><img src={item.img} width={70} alt="err" /></td>
                                        <td>{item.title.slice(0, 20)}...</td>
                                        <td>{item.desc.slice(0, 60)}...</td>
                                        <th scope="col"><Link to={`/dashboard/edit/${slugify(item.title)}`} className='editbtn d-flex align-items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" data-lucide="check-square" class="lucide lucide-check-square stroke-[1] mr-2 h-4 w-4"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                                        </Link></th>
                                        <th scope="col"><Link onClick={() => {
                                            dispatch(deleteBlog({ id: item.id }))
                                        }} className='deletebtn d-flex align-items-center mx-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" data-lucide="trash2" class="lucide lucide-trash2 stroke-[1] mr-2 h-4 w-4"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6">
                                                </path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                                        </Link></th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard