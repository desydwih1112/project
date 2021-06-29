import React from 'react'
import Link from "next/link"
export default function navigation() {
    return (
        <div>
            <div classname="container">
                <center>
                    <h1>Thrift Shop Banyuwangi</h1>
                    <h2>Second Like New</h2>
                </center>
            </div>

            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 bg-primary border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
                </a>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
                    <li><a href="/produk" className="nav-link px-2 text-white">Produk</a></li>
                    <li><a href="/checkout" className="nav-link px-2 text-white">Checkout</a></li>
                    <li>
                        <a className="btn btn-dark mt-auto" href="/login">Login</a>
                    </li>
                    <span></span>
                    <li>
                        <a className="btn btn-light mt-auto" href="/signup">Sign Up</a>
                    </li>
                </ul>
                <div className="col-md-3 text-end">
                </div>
            </header>




        </div>

    )
}