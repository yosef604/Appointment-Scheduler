import React from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
// import { Route } from 'react-router-dom'
import { userLogoutAction } from '../actions/usersActions'
// import SearchBox from './SearchBox'


const Header = () => {

    const dispatch = useDispatch()
  
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    const logoutHandler = () => {
      dispatch(userLogoutAction())
    }

  
    return (
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Barber Shop</Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
              <Nav className='ms-auto'>
                <LinkContainer to='/book'>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart'></i> Book
                  </Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <i className='fas fa-user'></i> Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title='Admin' id='adminmenu'>
                    <LinkContainer to='/admin/hours'>
                      <NavDropdown.Item>Set Hours</NavDropdown.Item>
                    </LinkContainer>
            
                    <LinkContainer to='/admin/orders'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
  
  export default Header
  