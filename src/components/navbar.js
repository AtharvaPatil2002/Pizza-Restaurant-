export default function Navbar() {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-danger sideNavBox'
      style={{ backgroundColor: 'black' }}
    >
      <div className='container-fluid'>
        <h3 className='navbar-brand' style={{ color: 'red' }} href='/'>
          Family Restaurant
        </h3>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-lg-0'>
            <li className='nav-item'>
              <a
                className='nav-link active'
                style={{ color: 'red' }}
                aria-current='page'
                href='/'
              >
                Home
              </a>
            </li>
            <li
              className='nav-item dropdown active'
              style={{ margin: '0px', padding: '0px' }}
            >
              <a
                className='nav-link dropdown-toggle'
                style={{ color: 'red' }}
                href='/'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Menu
              </a>
              <ul
                className='dropdown-menu'
                style={{ margin: '0px', padding: '0px' }}
                aria-labelledby='navbarDropdown'
              >
                <li>
                  <a
                    className='dropdown-item'
                    style={{ color: 'lime', backgroundColor: 'black' }}
                    href='/'
                  >
                    Veg.
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    style={{ color: 'red', backgroundColor: 'black' }}
                    href='/'
                  >
                    Nonveg.
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item text-info'
                    style={{ backgroundColor: 'black' }}
                    href='/'
                  >
                    Beverages
                  </a>
                </li>
                {/*} <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>*/}
              </ul>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link active'
                style={{ color: 'red' }}
                href='/about'
              >
                About Us
              </a>
            </li>
            <li className='nav-item dropdown active'>
              <a
                className='nav-link active dropdown-toggle '
                style={{ color: 'red' }}
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                href='/'
              >
                Contacts
              </a>
              <ul
                className='dropdown-menu'
                style={{ margin: '0px', padding: '0px' }}
                aria-labelledby='navbarDropdown'
              >
                <li>
                  <a
                    className='dropdown-item'
                    style={{ backgroundColor: 'black', color: 'white' }}
                    href='/'
                  >
                    7895313821
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    style={{ backgroundColor: 'black', color: 'white' }}
                    href='/'
                  >
                    3598437292
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    style={{ backgroundColor: 'black', color: 'white' }}
                    href='/'
                  >
                    5435465657
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
