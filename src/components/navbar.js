import { NavbarHome, NavbarMenu, NavbarTitle, MenuDropdown } from './navbar.styled';


export default function Navbar() {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-danger sideNavBox'
      style={{ backgroundColor: 'black' }}
    >
      <div className='container-fluid'>
        <NavbarTitle className='navbar-brand' style={{ color: 'red' }} href='/'>
          Family Restaurant
        </NavbarTitle>
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
              <NavbarHome
                className='nav-link active'
                style={{ color: 'red' }}
                aria-current='page'
                href='/'
              >
                Home
              </NavbarHome>
            </li>
            <li
              className='nav-item dropdown active'
              style={{ margin: '0px', padding: '0px' }}
            >
              <NavbarMenu
                className='nav-link dropdown-toggle'
                style={{ color: 'red' }}
                href='/'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Categories
              </NavbarMenu>
              <ul
                className='dropdown-menu'
                style={{ margin: '0px', padding: '0px' }}
                aria-labelledby='navbarDropdown'
              >
                <li>
                  <MenuDropdown
                    className='dropdown-item'
                    style={{ color: 'lime', backgroundColor: 'black' }}
                    href='/'
                  >
                    Veg.
                  </MenuDropdown>
                </li>
                <li>
                  <MenuDropdown
                    className='dropdown-item'
                    style={{ color: 'red', backgroundColor: 'black' }}
                    href='/'
                  >
                    Nonveg.
                  </MenuDropdown>
                </li>
                <li>
                  <MenuDropdown
                    className='dropdown-item text-info'
                    style={{ backgroundColor: 'black',  }}
                    href='/'
                  >
                    Beverages
                  </MenuDropdown>
                </li>
              </ul>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
  );
}
