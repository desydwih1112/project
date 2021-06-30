import React from 'react'

export default function login() {
  return (
    <div className="container-sm">
      <form className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        <div>
          <label for="basic-url" class="form-label">Nama Lengkap</label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Nama Lengkap" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <label for="basic-url" class="form-label">Username</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <label for="basic-url" class="form-label">Email</label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Example@gmail.com" aria-label="Email" aria-describedby="basic-addon1" />
          </div>
          <label for="basic-url" class="form-label">Password</label>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
          </div>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
      </form>

    </div >
  )
}