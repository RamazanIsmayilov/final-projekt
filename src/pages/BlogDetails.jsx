import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import slugify from 'react-slugify';

const BlogDetails = () => {

    const { det } = useParams();
    const blogData = useSelector(p => p);
    const blogDetails = blogData.filter(p => slugify(p.title) === det);

    return (
        <div className='blogdetails'>
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
                    <div className="title d-flex align-items-center gap-5 flex-wrap">
                        <p className='fw-bold rounded-5'>Featured</p>
                        <p className='fw-bold'>Category: news</p>
                        <p className='fw-bold'>Date: December 13, 2022</p>
                    </div> 
                    <h2 className='sec-title fw-bold'>The Dev Diary Season Points Boomstick Gaming</h2>
                    <p className='desc fw-bold'>Gambling has been a main recreational activity in Great Britain for centuries. Queen Elizabeth I chartered a lottery that was...</p>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails