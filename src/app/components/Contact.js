import React, { Component } from 'react';
import Background from '../../static/images/contact-bg.jpg'

export default class Contact extends Component {
  render() {
    return (
      <div id='contact'>
        <div id='bg-image' style={{backgroundImage: `url(${Background})`}}>

        </div>
        <div className='section-headers' style={{position:'relative',bottom:'100%'}}>
            -Contact-
        </div>
        <div className='container-fluid' style={{position:'relative',bottom:'90%'}}>
            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <div className='col-md-6'>
                        <i style={{margin:'0 5% 0 0'}} className="fa fa-envelope fa-4x" aria-hidden="true"></i>
                        <span className='creds'>dey7.kol@gmail.com</span>
                    </div>
                    <div className='col-md-6'>
                        <i style={{margin:'0 5% 0 0'}} className="fa fa-phone fa-4x" aria-hidden="true"></i>
                        <span className='creds'>(+91)-8981235949</span>
                    </div>
                </div>
                <div className='row social'>
                  <div className='col-md-3'>
                    <span>Follow me on:</span>
                  </div>
                  <div className='col-md-2'>
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </div>
                </div>
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
