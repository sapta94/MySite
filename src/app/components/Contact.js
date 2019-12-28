import React, { Component } from 'react';


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
              <div className='col-md-8'>
                <div className='row'>
                  <div className='col-md-4'>
                        <i style={{margin:'0 5% 0 0'}} className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                        <p>dey7.kol@gmail.com</p>
                    </div>
                    <div className='col-md-4'>
                        <i style={{margin:'0 5% 0 0'}} className="fa fa-phone fa-2x" aria-hidden="true"></i>
                        <p>(+91)-8981235949</p>
                    </div>
                    <div className='col-md-4'>
                        <i style={{margin:'0 5% 0 0'}} className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                        <p>Bengaluru, India</p>
                    </div>
                </div>
                <div className='row social'>
                  <div className='col-md-3'>
                    <span>Follow me on:</span>
                  </div>
                  <div className='col-md-2'>
                    <i onClick={()=>this.handleClick(1)} className="fa fa-github" aria-hidden="true"></i>
                  </div>
                  <div className='col-md-2'>
                    <i onClick={()=>this.handleClick(2)} className="fa fa-angellist" aria-hidden="true"></i>
                  </div>
                  <div className='col-md-2'>
                    <i onClick={()=>this.handleClick(3)} className="fa fa-quora" aria-hidden="true"></i>
                  </div>
                  <div className='col-md-2'>
                    <i onClick={()=>this.handleClick(4)} className="fa fa-facebook" aria-hidden="true"></i>
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
