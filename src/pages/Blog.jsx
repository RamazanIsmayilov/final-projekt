import React, { useContext, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { ModeContext } from '../context/ModeContext'
import { LangContext } from '../context/LangContext'


const Blog = () => {

  const blogdata = useSelector(p => p);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = blogdata.slice(firstIndex, lastIndex);
  const npage = Math.ceil(blogdata.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const changePage = (id) => {
    setCurrentPage(id)
  }

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const { mode } = useContext(ModeContext)
  const { lang } = useContext(LangContext)


  return (
    <div className={mode ? "light" : "dark"}>
      <div className="blogpage">
        <div className="heading py-5">
          <div className="container d-flex flex-column gap-4">
            <Link to="/" className='d-flex align-items-center gap-3'>
              <span className="svg-ic d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="white">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.5791 2.28954C10.5791 2.53299 10.3818 2.73035 10.1383 2.73035L1.52698 2.73048L2.5628 3.73673C2.73742 3.90636 2.74146 4.18544 2.57183 4.36005C2.40219 4.53467 2.12312 4.53871 1.9485 4.36908L0.133482 2.60587C0.0480403 2.52287 -0.000171489 2.40882 -0.000171488 2.2897C-0.000171486 2.17058 0.0480403 2.05653 0.133482 1.97353L1.9485 0.210321C2.12312 0.0406877 2.40219 0.044729 2.57183 0.219347C2.74146 0.393966 2.73742 0.673036 2.5628 0.842669L1.52702 1.84888L10.1383 1.84875C10.3817 1.84874 10.5791 2.04609 10.5791 2.28954Z" fill="white"></path>
                </svg>
              </span>
              <span className='fw-bold'>{lang ? "Geriyə qayıt" : "Back to home"}</span>
            </Link>
            <h5 className='fs-1 fw-bold'>{lang ? "Bloq" : "Blog"}</h5>
            <span>{lang ? "Ən yaxşı oyun bloglarından yalnız ən yaxşısını seçmək prosesi çətin idi. Bu günlərdə hər kəs özünü oyun bloggeri və ekspert hesab edə bilər, ona görə də buğdanı samandan ayırmaq bir qədər vaxt apardı."
              : "The process of selecting only the best of the best gaming blogs was challenging. These days, anyone can consider themselves a gaming blogger and expert, so it took some time to separate the wheat from the chaff."}</span>
          </div>
        </div>

        <div className="blog mt-5">
          <div className="container">
            <div className="head">
              <span>{lang ? "BÜTÜN BLOQLAR" : "All BLOGS"}</span>
              <h2 className='fw-bold mt-3'>{lang ? "OYUN" : "GAME"}</h2>
            </div>
            <div className="blog-data">
              <div className="row my-1 g-4">
                {console.log(blogdata)}
                {blogdata.map((item) => (
                 <li>{item.title}</li>
                ))}
              </div>
            </div>
            <nav className='d-flex align-items-center justify-content-center mt-5'>
              <ul className='pagination d-flex gap-2'>
                <li className='page-item'>
                  <a onClick={prePage} href="#" className='page-link'><FaChevronLeft /></a>
                </li>
                {
                  numbers.map((n, i) => (
                    <li className={`page-item ${currentPage === n ? `active` : ''}`} key={i}>
                      <a onClick={(e) => changePage(n)} href="#" className='page-link'>{n}</a>
                    </li>
                  ))
                }
                <li className='page-item'>
                  <a onClick={nextPage} href="#" className='page-link'><FaChevronRight /></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog