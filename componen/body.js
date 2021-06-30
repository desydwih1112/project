import React from 'react'

export default function body() {
    return (
        <div>
            <div>
        <div className="bg-white py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center">
              <h1 className="display-4 fw-bolder"><div className="text-primary"></div>Produk Berkualitas</h1>
              <p className="lead fw-normal text-dark-50 mb-0">Terjangkau Dan Terpercaya</p>
            </div>
          </div>
        </div>
        </div>
            <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div className="col mb-5">
                    <div className="card h-100">
                    {/* Product image*/}
                    <img className="card-img-top" src="sweater blouse waffle.jpg" height={300} width={450}  alt="..." />
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">sweater blouse waffleo</h5>
                        {/* Product price*/}
                        Rp. 200.000
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-primary mt-auto" href="/produk">Cek Lainya</a></div>
                    </div>
                    </div>
                </div>
                <div className="col mb-5">
                    <div className="card h-100">
                    {/* Product image*/}
                    <img className="card-img-top" src="sweater lacoste.jpg" height={300} width={450} alt="..." />
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">sweater lacoste</h5>
                        {/* Product reviews*/}
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                        </div>
                        {/* Product price*/}
                        Rp. 150.000
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-primary mt-auto" href="/produk">Cek Lainya</a></div>
                    </div>
                    </div>
                </div>
                <div className="col mb-5">
                    <div className="card h-100">
                    {/* Product image*/}
                    <img className="card-img-top" src="hoodie H&M Starwar.jpg" height={300} width={450} alt="..." />
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">hoodie H&M Starwar</h5>
                        {/* Product price*/}
                         Rp. 300.000
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-primary mt-auto" href="/produk">Cek Lainya</a></div>
                    </div>
                    </div>
                </div>
                <div className="col mb-5">
                    <div className="card h-100">
                    {/* Product image*/}
                    <img className="card-img-top" src="kemeja flanel.jpg" height={300} width={450}  alt="..." />
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">kemeja flanel</h5>
                        {/* Product reviews*/}
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                        </div>
                        {/* Product price*/}
                        Rp. 90.000
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-primary mt-auto" href="/produk">Cek Lainya</a></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

        </div>
    )}