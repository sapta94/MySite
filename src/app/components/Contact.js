import React, { Component } from 'react';
import {Form,Button} from "react-bootstrap"
import axios from "axios"


export default class Contact extends Component {
  constructor(props){
    super(props)
    this.state={
      email:null,
      mobile:null,
      message:null
    }
  }

  handleChange=(id,e)=>{
    if(id==1){
      this.setState({
        email:e.target.value
      })
    }
    if(id==2){
      this.setState({
        mobile:e.target.value
      })
    }
    if(id==3){
      this.setState({
        message:e.target.value
      })
    }
  }

  handleClick=(id)=>{
    let url="";
    url=(id==1)?'github.com/sapta94':(id==2)?'angel.co/saptarshi-dey-1995':(id==3)?'quora.com/profile/Saptarshi-Dey-22':'facebook.com/saptarshi.cena'
    window.open('https://'+url)
  }

  sendMessage=()=>{
    axios.post('https://api.textlocal.in/send/?',{
      'apikey': '8inchm9Kjig-DjYCrIxZhI4yrTBTyw3tOF0dB00VOx', 'numbers': 8981235949,
      'message' : this.state.message, 'sender': this.state.mobile
    }).then((resp)=>{
      console.log(resp)
    }).catch(err=>{
      console.log(err)
    })
  }
  render() {
    return (
      <div id='contact'>
        <div className='section-headers' >
            -Contact-
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='contact-icons col-md-8 offset-md-3 '>
              <div className='row'>
                <div className='col-md-4 col-sm-4'>
                  <i className="fa fa-envelope fa-2x"></i>
                  <p>dey7.kol@gmail.com</p>
                </div>
                <div className='col-md-4 col-sm-4'>
                  <i className="fa fa-map-marker fa-2x"></i>
                  <p>Bengaluru, India</p>
                </div>
                <div className='col-md-4 col-sm-4'>
                  <i className="fa fa-phone fa-2x"></i>
                  <p>+91-8981235949</p>
                </div>
              </div>
              
            </div>
          </div>
          <div className='row'>
            <div className='col-md-8 offset-md-2' style={{marginTop:'2%',marginBottom:'2%'}}>
              <div className='row'>
                <div className='col-md-6 mob-view'>
                  
                  <Form.Control type="email" value={this.state.email} placeholder="name@example.com" onChange={(e)=>this.handleChange(1,e)}/>
                </div>
                <div className='col-md-6 mob-view'>
                  <Form.Control type="number" value={this.state.mobile} placeholder="Mobile No. here" onChange={(e)=>this.handleChange(2,e)}/>
                </div>
              </div>
            </div>
            
            <div className='col-md-8 offset-md-2'>
                <Form.Label>Your message here!</Form.Label>
                <Form.Control as="textarea" rows="3" value={this.state.message} onChange={(e)=>this.handleChange(3,e)}/>
            </div>
            
          </div>
          <center><Button onClick={()=>this.sendMessage()} style={{marginTop:'2%'}} className='custom-button' size='lg' target='_blank'>Send the message :)</Button></center>
        </div>  
       </div>
    );
  }
}
