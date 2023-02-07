import React from 'react'; 


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-body rounded shadow">
  <div className="container-fluid">
    <a className="navbar-brand text-primary display-1 fw-bold" href="#">Uifry</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-items-center">
        <li className="nav-item">
          <a className="nav-link active text-primary h2 fw-bold" aria-current="page" href="#">Personal</a>
        </li>
        <li className="nav-item ms-4">
          <a className="nav-link text-primary h2 fw-bold" href="#">Business</a>
        </li>    
        <li className="nav-item ms-4">
          <a className="nav-link text-primary h2 fw-bold" href="#">Company</a>
        </li>
        <li className="nav-item ms-4">
          <a className="nav-link text-primary h2 fw-bold" href="#">Help</a>
        </li>
      </ul>
      <form className="d-flex align-items-center">
          <a className="nav-link active me-4 text-primary fw-bold h2" aria-current="page" href="#">sign in</a>
        <button className="btn btn-primary text-white" type="submit">Get Uifry</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar



