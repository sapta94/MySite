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
    url=(id==0)?'www.linkedin.com/in/saptarshi-dey-97b313bb/':(id==1)?'github.com/sapta94':(id==3)?'angel.co/saptarshi-dey-1995':(id==2)?'quora.com/profile/Saptarshi-Dey-22':(id==4)?'www.hackerrank.com/saptatech':(id==5)?'facebook.com/saptarshi.cena':'instagram.com'
    console.log(url)
    window.open('https://'+url)
  }

  sendMessage=()=>{
    if(!this.state.message || this.state.message==''){
      alert('Please Enter Some Message to Send!')
      return
    }
    if (!this.state.mobile && !this.state.email){
      alert('Please Enter Atleast One contact details')
      return
    }
    axios.post('https://mailer-end.herokuapp.com/api/sendMail',{
      'mobile':this.state.mobile,
      'content':this.state.message,
      'sender':this.state.email
    }).then((resp)=>{
      console.log(resp)
      if(resp.data && resp.data.message=='success'){
        alert('Message Sent!')
      }
    }).catch(err=>{
      console.log(err)
      alert('Failed to send Message!')
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
          <div className='row'>
            <div className='col-md-8 offset-md-4'>
              <label id='contact-label'>Follow me on: </label>
                <i className="fa fa-linkedin-square fa-2x socials" aria-hidden="true" onClick={()=>this.handleClick(0)}></i>
                <i className="fa fa-github-square fa-2x socials" aria-hidden="true" onClick={()=>this.handleClick(1)}></i>
                <i className="fa fa-quora fa-2x socials" aria-hidden="true" onClick={()=>this.handleClick(2)}></i>
                <i className="fa fa-angellist fa-2x socials" aria-hidden="true" onClick={()=>this.handleClick(3)}></i>
                <span onClick={()=>this.handleClick(4)}><span className="iconify socials" data-icon="simple-icons:hackerrank" data-inline="false"></span></span>
                <i className="fa fa-facebook-square fa-2x socials" aria-hidden="true"  onClick={()=>this.handleClick(5)}></i>
                <i className="fa fa-instagram fa-2x socials" aria-hidden="true"  onClick={()=>this.handleClick(6)}></i>
            </div>
          </div>
        </div>  
       </div>
    );
  }
}
