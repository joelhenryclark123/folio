import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = () => (
    <div className="HeaderWrapper">
        <div className="HeaderGroup">
            <Link to="http://joelhenryclark123.github.io/blog">
                <p id="unselected">blog</p>
            </Link>
            <Link to="/">
                <p id="selected">portfolio</p>
            </Link>
        </div>
    </div>
)

export default Header