import React from 'react'

const Register = () => {
  return (
    <div className='text-center'>
      <main className="form-signin w-25 m-auto">
    <form>
      <h1 className="h3 mb-3 fw-normal mt-3">Please register</h1>
      <div className="form-floating">
        <input type="text" className="form-control" id="floatingInput" placeholder="username" />
        <label for="floatingInput">Username</label>
      </div>
      <div className="form-floating">
        <input type="email" className="form-control my-2" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Password</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
    </form>
  </main></div>
  )
}

export default Register