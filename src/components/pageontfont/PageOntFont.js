import React from 'react'
import "./pagenotfont.css"
import { Link } from 'react-router-dom'
function PageOntFont(props) {
  return (
    <div className={`pagenotfont ${props.langs}`}>
      <div className='pagenotfont-itme'> .
        
        <h1>404</h1>
        <h3>{props.langs === "en" ? "صفحة غير موجودة" : "Page Not Found"}</h3>

        {props.langs === "ar" ? (
          <h6>Oops! The page you're looking <br /> for doesn't exist.</h6>
        ):(
          
          <h6>
            عفوًا، الصفحة التي تبحث عنها <br /> غير موجودة.
          </h6>

        )}
        <Link to={"/"}>{props.langs==="ar"?"Back to Home":"رجوع للرئيسية"}</Link>
      </div>
    </div>
  )
}

export default PageOntFont