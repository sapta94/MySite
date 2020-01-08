import React, { Component } from 'react';
import Background from '../../static/images/bg1.jpg';
import {Jumbotron,Button} from "react-bootstrap" 
import CountUp from 'react-countup';

export default class About extends Component {
  constructor(props){
    super(props)
    this.state={
      ind:null
    }
  }
  componentDidMount(){
    var that=this
    window.addEventListener("scroll",  function(event){
        let scroll = this.scrollY;
        let homDiv = document.getElementById("home").scrollHeight;
        let aboutDiv = document.getElementById("about").scrollHeight
        
        if(scroll>=homDiv-23 && scroll<homDiv+aboutDiv-65){
          that.setState({
            ind:2
          })
      }
    })
  }
  render() {
    return (
      <div id="about"  >
        <div className="img-header" style={{backgroundImage: `url(${Background})`}}> 
            <div className='section-headers'>
                -About Me-
            </div>
            <div className='container-fluid'>
              <div className='row' style={{marginLeft:'8%'}}>
                <div className='col-md-4 side-image'>
                  <div className='row'>
                    <div className='col-md-6'>
                        {
                        this.state.ind==2?<CountUp start={5000} end={100000} delay={0}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp>:null
              
                      }
                      <span className='labels'>Lines of Code</span>
                    </div>
         
                    <div className='col-md-6'>
                    {
                        this.state.ind==2?<CountUp start={0} end={100} delay={0}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp>:null
              
                      }
                      <span  className='labels'>Dedication</span>
                    </div>

                  </div>
                  <br/>
                  <div className='row'>
                    <div className='col-md-6'>
                        {
                        this.state.ind==2?<CountUp start={0} end={100} delay={0}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp>:null
              
                      }
                      <span  className='labels'>Persistance</span>
                    </div>
                    <div className='col-md-6'>
                    {
                        this.state.ind==2?<CountUp start={0} end={80} delay={0}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp>:null
              
                      }
                      <span  className='labels'>Cups of Beverage</span>
                    </div>
                  </div>
                  <br/>
                  <div className='row'>
                    <div className='col-md-6'>
                        {
                        this.state.ind==2?<CountUp start={0} end={60} delay={0}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp>:null
              
                      }
                      <span  className='labels'>Geek</span>
                    </div>
                  </div>

                </div>
                <div className='col-md-6'>
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
