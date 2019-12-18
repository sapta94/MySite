import React, { Component } from 'react';
import Background from '../../static/images/contact-bg.jpg'

export default class Contact extends Component {
  render() {
    return (
      <div id='contact' style={{backgroundImage: `url(${Background})`}}> 
        <div className='section-headers'>
            -Contact-
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-4'>
                    <i style={{margin:'0 5% 0 0'}} className="fa fa-envelope fa-4x" aria-hidden="true"></i>
                    <span className='creds'>dey7.kol@gmail.com</span>
                </div>
                <div className='col-md-4'>
                    <i style={{margin:'0 5% 0 0'}} className="fa fa-phone fa-4x" aria-hidden="true"></i>
                    <span className='creds'>(+91)-8981235949</span>
                </div>
                <div className='col-md-4'>
                  <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="saptarshi-dey-97b313bb"><a class="LI-simple-link" href='https://in.linkedin.com/in/saptarshi-dey-97b313bb?trk=profile-badge'>Saptarshi Dey</a></div>
                </div>
            </div>
        </div>
       </div>
    );
  }
}
