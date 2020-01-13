import React, { Component } from 'react';
import {Form,Button} from "react-bootstrap"


export default class Contact extends Component {

  handleClick=(id)=>{
    let url="";
    url=(id==1)?'github.com/sapta94':(id==2)?'angel.co/saptarshi-dey-1995':(id==3)?'quora.com/profile/Saptarshi-Dey-22':'facebook.com/saptarshi.cena'
    window.open('https://'+url)
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
                <div className='col-md-6'>
                  
                  <Form.Control type="email" placeholder="name@example.com" />
                </div>
                <div className='col-md-6'>
                  <Form.Control type="number" placeholder="Mobile No. here" />
                </div>
              </div>
            </div>
            
            <div className='col-md-8 offset-md-2'>
                <Form.Label>Your message here!</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </div>
            
          </div>
          <center><Button style={{marginTop:'2%'}} className='custom-button' size='lg' target='_blank'>Send the message :)</Button></center>
        </div>  
       </div>
    );
  }
}
