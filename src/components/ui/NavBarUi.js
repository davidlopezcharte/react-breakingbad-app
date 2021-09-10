import 'bootstrap/dist/css/bootstrap.css';
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { firebase } from '../../firebase/firebase-config';
import { logout } from '../../actions/auth';
import logo from '../../assets/logo/logo1.png';
import { AuthContext } from '../../auth/AuthContext';

export const NavBarUi = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line
      });
  };

  return (
    <>
      <div className="App">
        <Navbar
          bg="dark"
          variant="dark"
          sticky="top"
          expand="sm"
          collapseOnSelect
        >
          <Navbar.Brand>
            <img src={logo} width="70px" height="40px" alt="" />
          </Navbar.Brand>

          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link as={Link} to="/breakingbad">
                Breaking Bad
              </Nav.Link>
              <Nav.Link as={Link} to="/bettercallsaul">
                BCS
              </Nav.Link>
              <Nav.Link as={Link} to="/search">
                Search
              </Nav.Link>
            </Nav>

            <Navbar.Collapse className="justify-content-sm-end ">
              <Nav>
                <Nav.Link className="text-info" as={Link} to="/profile">
                  {user.name}
                </Nav.Link>

                <button className="btn" onClick={handleLogout} type="button">
                  Logout
                </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};
