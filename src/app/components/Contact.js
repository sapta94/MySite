import React, { Component } from 'react';
import {Card} from "react-bootstrap"

export default class Contact extends Component {
  render() {
    return (
      <div id='contact'> 
        <div className='section-headers'>
            -Contact-
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-4'>
                    <i className="fa fa-envelope fa-4x" aria-hidden="true"></i>
                    <span className='creds'>dey7.kol@gmail.com</span>
                </div>
                <div className='col-md-4'>
                    <i className="fa fa-phone fa-4x" aria-hidden="true"></i>
                    <span>(+91)-8981235949</span>
                </div>
            </div>
        </div>
       </div>
    );
  }
}
