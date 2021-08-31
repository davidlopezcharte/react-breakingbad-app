
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo1.png'

// import {} from '../../assets/logo/'



    
export const NavBarUi = () => {

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          
          <img src={logo} width="70px" height="40px" alt={""}/>
          
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Products">
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={"/breakingbad"}>Breaking Bad</Nav.Link>
            <Nav.Link as={Link} to="/bettercallsaul">BCS</Nav.Link>
            <Nav.Link as={Link} to="/login">Logout</Nav.Link>
          </Nav>
          <div className="navbar-collapse collapse w-50 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </Navbar.Collapse>

      </Navbar>
      
    </div>
  );
        
    }




              // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              //     <div className="container-fluid">
              //         <Link
              //             className="navbar-brand"
              //             to="/">
              //                 Home
              //         </Link>
              //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              //             <span className="navbar-toggler-icon"></span>
              //         </button>
              //         <div className="collapse navbar-collapse" id="navbarText">
              //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              //                 <li className="nav-item">
              //                     <NavLink className="nav-link ml " aria-current="page" to="/breakingbad">
              //                         Breaking Bad
              //                     </NavLink>
              //                 </li>
              //                 <li className="nav-item">
              //                     <NavLink className="nav-link" to="/bettercallsaul">
              //                         Better Call Saul
              //                     </NavLink>
              //                 </li>
              //                 <li className="nav-item">
              //                     <NavLink className="nav-link" to="/search">
              //                         Search
              //                     </NavLink>
              //                 </li>
              //             </ul>
              //             <span className="navbar-text">
              //                 Logout
              //             </span>
              //         </div>
              //     </div>
              // </nav>       
