import React from 'react';
import { Navbar,Nav,Container } from "react-bootstrap";
/// modified

const Tabs = () => {
    return (
        <Nav variant="tabs" defaultActiveKey={'#home'} >
            {/* <Container > */}
            <Nav.Link href="#home">Metrics</Nav.Link>
            <Nav.Link href="#features">user</Nav.Link>
            {/* </Container> */}
      </Nav>

    
    )
}

export default Tabs
