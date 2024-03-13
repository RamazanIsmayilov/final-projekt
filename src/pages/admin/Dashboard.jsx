import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const blogStore = useSelector(p => p);

    return (
        <div className='container'>
            <h1 className='text-center my-5'>All blogs table</h1>
            <Link className='btn btn-success' to="/add">Add</Link>
            <div className="d-flex-align-items-center justify-content-center">
                <table class="table">
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
                            <td>{item.title.slice(0, 24)}...</td>
                            <td>{item.desc.slice(0, 60)}...</td> 
                            <th scope="col"><button className='btn btn-warning text-light'>Edit</button></th>
                            <th scope="col"><button className='btn btn-danger'>X</button></th>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard