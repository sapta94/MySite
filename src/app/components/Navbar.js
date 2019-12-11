import React from "react";
import { Navbar, Nav ,Jumbotron} from 'react-bootstrap'
import Background from '../../static/images/me.jpg';



class Navigation extends React.Component{
    constructor(props){
        super()
        this.state={
            activeItem:1,
            bg:'',
            headerClass:'pull-center'
        }
    }
    componentDidMount(){
        var that=this
        window.addEventListener("scroll",  function(event){
            let scroll = this.scrollY;
            let homDiv = document.getElementById("home").scrollHeight;
            let aboutDiv = document.getElementById("about").scrollHeight
            let careerDiv = document.getElementById("career").scrollHeight;
            console.log('scroll=',scroll,' homediv=',homDiv,' aboutDiv=',aboutDiv,' carrerDiv=',careerDiv)
            if(scroll==0){
                that.setActive(1)
                that.setState({
                    headerClass:'pull-center'
                })
            }
            else if(scroll>=homDiv && scroll<homDiv+aboutDiv-65){
                that.setActive(2)
            }
            else if(scroll>=homDiv+aboutDiv-65 && scroll<homDiv+aboutDiv+careerDiv-65){
                that.setActive(3)
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    setActive=(index,click)=>{
        let elemId=(index==1)?'#home':(index==2)?'#about':(index==3)?'#career':(index==4)?'#projects':'#contact'
        
        this.setState({
            activeItem:index
        },()=>{
            if(this.state.activeItem==1){
                this.setState({
                    bg:''
                })
            }
            else{
                this.setState({
                    bg:'dark',
                    headerClass:'scrolled'
                })
            }
        })
        if(click==true){
            document.querySelector(elemId).scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
        
    }
    render(){
        const { activeItem } = this.state
        return(
        <div id="home">
            <div className='img-header' style={{backgroundImage: `url(${Background})`}}>
                <Jumbotron id="my-image" className='about-me'>
                    <p>Hello, I am</p>
                    <h1>-<span>Saptarshi</span>-</h1>
                    <br/>
                    <p>
                        A Software Development Engineer
                    </p>
                </Jumbotron>
                <div class="arrow" onClick={()=>this.setActive(2,true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            <Navbar collapseOnSelect expand="lg" bg={this.state.bg} variant='dark' fixed="top">
            <Navbar.Brand className='navHeader' href="#home">SD</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div>
                        <Nav className={this.state.headerClass}>
                            <Nav.Link onClick={()=>this.setActive(1,true)} active={(this.state.activeItem==1?true:false)} href="">Home</Nav.Link>
                            <Nav.Link onClick={()=>this.setActive(2,true)} active={(this.state.activeItem==2?true:false)} href="">About</Nav.Link>
                            <Nav.Link onClick={()=>this.setActive(3,true)} active={(this.state.activeItem==3?true:false)} href="">Career</Nav.Link>
                            <Nav.Link onClick={()=>this.setActive(4,true)} active={(this.state.activeItem==4?true:false)} href="">Projects</Nav.Link>
                            <Nav.Link onClick={()=>this.setActive(5,true)} active={(this.state.activeItem==5?true:false)} href="">Contact</Nav.Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }
}
export default Navigation;