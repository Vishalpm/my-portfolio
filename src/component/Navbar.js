import React from 'react'
import "./style/nav.css"

function Navbar() {
  return (
    <>
        <div className="container">
        <nav className='navbar'>
            <div className="logo">Logo</div>
            <div className="btn-group ">
                <a className='grow-ul a-tag' href="">Vishal</a>
                <a className='grow-ul a-tag' href="">Portfolio</a>
                <a className='grow-ul a-tag'  href="">Projects</a>
                <a className='grow-ul a-tag' href="">Contact Us</a>
            </div>

            <div className="cv">
                <button>Hire me</button>
            </div>
        </nav>
        </div>
    </>
  )
}

export default Navbar