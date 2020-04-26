/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

function Footer() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="footer p-3 mt-4 text-center bg-dark text-light">
          Developed By:
          <span className="text-warning font-weight-normal">
            Patrick
          </span>
          , Using <i className="fab fa-react" /> React JS &amp; Redux JS integrated with external movies data API
          <a 
            href="http://www.omdbapi.com/"
            target="_blank"
          >
            OMDB
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
