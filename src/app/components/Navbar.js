import React from "react";
import { Navbar, Nav ,Jumbotron} from 'react-bootstrap'
import Background from '../../static/images/image.jpg';
import TypeIt from "typeit"
import Particles from "react-particles-js"



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
            let expertiseDiv = document.getElementById("expertise").scrollHeight;
            let contactDiv = document.getElementById("contact").scrollHeight;

            console.log(scroll,'  ',homDiv,' ',homDiv+aboutDiv-65)

            if(scroll==0){
                that.setActive(1)
                that.setState({
                    headerClass:'pull-center'
                })
            }
            else if(scroll>=homDiv-23 && scroll<homDiv+aboutDiv-65){
                that.setActive(2)
            }
            else if(scroll>=homDiv+aboutDiv-65 && scroll<homDiv+aboutDiv+careerDiv-65){
                that.setActive(3)
            }
            else if(scroll>=homDiv+aboutDiv+careerDiv-65 && scroll<homDiv+aboutDiv+careerDiv+expertiseDiv-65){
                that.setActive(4)
            }
            else if(scroll>=homDiv+aboutDiv+careerDiv+expertiseDiv-65 && scroll<=homDiv+aboutDiv+careerDiv+expertiseDiv+contactDiv-65){
                that.setActive(5)
            }
        });
        
        new TypeIt('#myProfiles',{
            loop:true
        })
        .type('A Software Developer')
        .pause(500)
        .delete()
        .type('Competitive Coder')
        .pause(500)
        .delete()
        .type('Blogger')
        .go()     
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    setActive=(index,click)=>{
        let elemId=(index==1)?'#home':(index==2)?'#about':(index==3)?'#career':(index==4)?'#expertise':'#contact'
        if(!click){ 
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
        }
        if(click==true){
            document.querySelector(elemId).scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
        
    }
    render(){
        return(
        <div id="home">
            <div className='img-header'>
                {/* <Jumbotron id="my-image" className='about-me'>
                    <p>Hello, I am</p>
                    <h1>-<span>Saptarshi</span>-</h1>
                    <br/>
                    <p id="myProfiles">
                        
                    </p>
                </Jumbotron>
                <div class="arrow" onClick={()=>this.setActive(2,true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> */}
                <Particles 
                 params={{
                     
                    "particles": {
                        "number": {
                            "value": 80,
                            "density":{
                                enable:true,
                                value_area:800
                            }
                        },
                        "size": {
                            "value": 4
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            }
                        }
                    }
                 }}/>
                 <img className='title-image' src={Background} style={{borderRadius:'50%',height:'200px',width:'200px'}}/>
                 <Jumbotron id="my-image" className='about-me'>
                    <p>Hello, I am</p>
                    <h1>-<span>Saptarshi</span>-</h1>
                    <br/>
                    <p id="myProfiles">
                        
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
                            <Nav.Link onClick={()=>this.setActive(4,true)} active={(this.state.activeItem==4?true:false)} href="">Expertise</Nav.Link>
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