import React from "react";
import { Navbar, Nav ,Jumbotron} from 'react-bootstrap'
import Background from '../../static/images/me.jpg';


class Navigation extends React.Component{
    constructor(props){
        super()
        this.state={
            activeItem:1
        }
    }
    setActive=(index)=>{
        this.setState({
            activeItem:index
        })
    }
    render(){
        const { activeItem } = this.state
        return(
        <div>
            <div id='img-header' style={{backgroundImage: `url(${Background})`}}>
                <Jumbotron id="my-image" style={{backgroundColor:'transparent'}}>
                    <p>Hello, I am</p>
                    <h1>-<span>Saptarshi</span>-</h1>
                    <br/>
                    <p>
                        A Software Development Engineer
                    </p>
                </Jumbotron>
                <div class="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            <Navbar collapseOnSelect expand="lg"  variant='dark' fixed="top">
            <Navbar.Brand className='navHeader' href="#home">SD</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div>
                        <Nav className="pull-center">
                            <Nav.Link onClick={()=>this.setActive(1)} active={(this.state.activeItem==1?true:false)} href="#home">Home</Nav.Link>
                            <Nav.Link onClick={()=>this.setActive(2)} active={(this.state.activeItem==2?true:false)} href="#about">About</Nav.Link>
                            <Nav.Link onClick={()=>this.setActive(3)} active={(this.state.activeItem==3?true:false)} href="#career">Career</Nav.Link>
                            <Nav.Link onClick={()=>this.setActive(4)} active={(this.state.activeItem==4?true:false)} href="#projects">Projects</Nav.Link>
                            <Nav.Link onClick={()=>this.setActive(5)} active={(this.state.activeItem==5?true:false)} href="#contact">Contact</Nav.Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }
}
export default Navigation;