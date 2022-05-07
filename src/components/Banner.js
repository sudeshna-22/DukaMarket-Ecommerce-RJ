import React from 'react'
import './css/banner.css'

export default function Banner() {
  return (
    <div id="banner_section">
          <div className="banner">
                  <div className="banner-content">
                      <h1>Summer Accessories Super Sale</h1>
                      <p>Great Deals on brands like Samsung, Apple, Beats and many more</p>
                  <a className='btn'>Shop Now</a>
                  {/* <h4 className='arrow'>
                      <a className='btn-arrow-left'>{'<'}</a> <a className='btn-arrow-right'>{'>'}</a>
                  </h4> */}
                  </div>         
        </div>
    </div>
  )
}
