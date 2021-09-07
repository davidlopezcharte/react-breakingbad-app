
import 'bootstrap/dist/css/bootstrap.css'
import firebase from 'firebase';
import { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import logo from '../../assets/logo/logo1.png'
import { AuthContext } from '../../auth/AuthContext';





    
export const NavBarUi = () => {
  

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

