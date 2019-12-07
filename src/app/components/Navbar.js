import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import Background from '../../static/images/bg-image.jpg';

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
            <div id='img-header' style={{backgroundImage: `url(${Background})`}}>

            </div>
            <Navbar collapseOnSelect expand="lg" fixed="top">
            <Navbar.Brand className='navHeader' href="#home">SD</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div>
                        <Nav className="pull-center">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </div>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }
}
export default Navigation;