import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-danger'>
        <a className='navbar-brand' href='#'>
          Team Alkali
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
                <Link className="nav-link" to="/">
                    Dashboard
                </Link>
                <Link className="nav-link" to="/team">
                    Team
                </Link>
                <Link className="nav-link" to="/form">
                    Join Us
                </Link>
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar;