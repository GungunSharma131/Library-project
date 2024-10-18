
import { Link } from 'react-router-dom';

const Navbar = () =>  {
    return(
        <div className='navigation-bar'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
  <div className="container-fluid navigation-bar">
    <a className="navbar-brand" to="/Gungun"><img src='data:image/png;base64,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'  height={90}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav nav-listmhbkcy m-3 ">
        <li className="nav-item dark">
        <Link className='nav-link'  to={"/"}>Home</Link>   
        </li>
        <li className="nav-item ">
        <Link className='nav-link'  to={"/about"}>About</Link>
        </li>
        <li className="nav-item ">
        <Link className='nav-link'  to={"/service"}>Service</Link>
        </li>
        <li className="nav-item ">
        <Link className='nav-link'  to={"/Contact"}>Contact</Link>
        </li>
      </ul>
    </div>
    <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
  </div>
  
</nav>


        </div>
    );
};

export default Navbar;