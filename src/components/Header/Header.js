import React from 'react';
import '../../stylesheets/Header.css'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  Form,
  FormControl,
  Button
}
from 'react-bootstrap';


class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log("Header Props")
    console.log(props);
    this.state = {
      title: props.title
    }

  }

  componentDidMount() 
  {
    console.log("Header Mounted.")
    // this.props.history.push("/");
  }


  // <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //         <Navbar.Collapse id="basic-navbar-nav">
  //           <Nav className="mr-auto">
  //             <Nav.Link href="#home">Home</Nav.Link>
  //             <Nav.Link href="#link">Link</Nav.Link>
  //             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
  //               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  //               <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
  //               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //               <NavDropdown.Divider />
  //               <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  //             </NavDropdown>
  //           </Nav>
  //           <Form inline>
  //             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //             <Button variant="outline-success">Search</Button>
  //           </Form>
  //         </Navbar.Collapse>
  render() {
    return (
      <div className="Header">
        <Navbar className="navbar-use" bg="dark" expand="lg">
          <Navbar.Brand className="text-white" onClick={() => { window.history.back()}}>
            <h4>BACK</h4>
          </Navbar.Brand>
          <Navbar.Brand className="logo text-white" href="/">
              <h1>D403's Adventure - {this.state.title}</h1>
            </Navbar.Brand>
          
            
          
        </Navbar>
      </div>
    );
  }
}

export default Header;