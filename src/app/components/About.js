import React, { Component } from 'react';
import Background from '../../static/images/bg1.jpg';
import {Jumbotron,Button} from "react-bootstrap" 

export default class About extends Component {
  render() {
    return (
      <div id="about"  >
        <div className="img-header" style={{backgroundImage: `url(${Background})`}}> 
            <div className='section-headers'>
                -About Me-
            </div>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-4 side-image'>
                  <img height='500' width='500' src='../../static/images/side.png'/>
                </div>
                <div className='col-md-8'>
                  <Jumbotron className='about-me'>
                      <p>
                      Well, first of all, a big sports addict. Be it cricket, football or badminton, you can count me in as a  participant or as a spectator. Also loves comic book stuffs, be it DC or Marvel. Ready to join in any fanboy discussions! 
                      I spend my spare time working on personal projects, engaging in competitive coding and sometimes reading biographies and autobiographies.
                      Anytime ready to discuss new technologies or some technology-related challenges.

                      </p>
                      <br/>
                      <center><Button className='custom-button' size='lg' target='_blank' href="https://drive.google.com/file/d/0Bw5_Q3gm0KuNb2xBUDVXbTAxd3RVSnd2VEdvalB1cmYzOEZz/view?usp=sharing">Download CV</Button></center>
                  </Jumbotron>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
