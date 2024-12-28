import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
    const { items } = useSelector(state => state.cart);

    return (
        <>
            <nav className='fixed-top'>
                <div className="container">
                    <div className="nav-inner">
                        <div className="nav-logo">
                            <Link to={"/"}><span>E-</span>Commerce</Link>
                        </div>
                        <div className="nav-btn">
                            <Link to={"/cart"} type="button" className="btn btn-primary position-relative">
                                Cart
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {items.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
