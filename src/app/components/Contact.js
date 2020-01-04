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
        
       </div>
    );
  }
}
