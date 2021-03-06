import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className='head-section'>
    <div className='head-section-inner'>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
