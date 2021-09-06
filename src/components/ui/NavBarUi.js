
import 'bootstrap/dist/css/bootstrap.css'
import firebase from 'firebase';
import { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import logo from '../../assets/logo/logo1.png'
import { AuthContext } from '../../auth/AuthContext';
import { useLogin } from '../../hooks/useLogin';
import { useUiError } from '../../hooks/useUiError';




    
export const NavBarUi = () => {
  const { startLoading} = useUiError();

  const {user, dispatch} = useContext(AuthContext)
  
  // const handleLogout = useLogin()
  
  const handleLogout = (e) => {
    e.preventDefault();
   
    
    firebase.auth().signOut()
      .then(() => {
        
        dispatch(logout())

      })
      .catch(e => {
        console.log(e)
      })

     
  }

  // console.log(isMounted)

  
  

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
            {/* <NavDropdown title="Products">
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to={"/breakingbad"}>Breaking Bad</Nav.Link>
            <Nav.Link as={Link} to="/bettercallsaul">BCS</Nav.Link>
            <Nav.Link as={Link} to="/search">Search</Nav.Link>
            {/* <Nav.Link className="text-info" as={Link} to="">{user.name}</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/auth/login">Logout</Nav.Link> */}
            {/* <div className="justify-content-end">
            <button className= "btn btn-primary mt-1">
              Logout
            </button>

            </div> */}
           
          </Nav>

            <Navbar.Collapse className="justify-content-sm-end ">
              <Nav>
            <Nav.Link className="text-info" as={Link} to="/profile">{user.name}</Nav.Link>


              <button 
                className= "btn"
                onClick={handleLogout}>
                Logout
              </button>
              </Nav>
              

              
              
          </Navbar.Collapse>
         


        </Navbar.Collapse>

      </Navbar>
      
    </div>
  );
  
};

{/* <div className="">
  <ul className="navbar-nav ms-auto">
    <span >
      David
    </span>
    <button
      className="btn" 
    >
      Logout
    </button>
  </ul>
</div> */}

{/* <div className="navbar-collapse collapse w-50 order-3 dual-collapse2">
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
  </div> */}




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
