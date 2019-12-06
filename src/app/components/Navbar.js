import React from "react";
import { Navbar, Nav } from 'react-bootstrap'

class Navigation extends React.Component{
    constructor(props){
        super()
        this.state={
            activeItem:'home'
        }
    }
    render(){
        const { activeItem } = this.state
        return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto pull-center">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#career">Career</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }
}
export default Navigation;