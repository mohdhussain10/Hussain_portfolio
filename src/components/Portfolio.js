import React, { Component } from 'react';
import FlexView from 'react-flexview';
export default class Porfolio extends Component {
  
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row skill">
        <div className="three columns header-col">
          <h1 style={{textDecoration:'underline',textDecorationWidth:'10px',textDecorationColor:'#64b6d1',fontSize:'20px',textUnderlinePosition:'',textDecorationThickness:'5px',color:'#000608',borderbottom:'#64b6d1 7px solid',paddingBottom:'5px'}}><span>Projects</span></h1>
          
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <center><div style={{marginLeft:'300px',display:'inline-block',textAlign:'justify',wordSpacing:'0',width:'100%'}}>
                
                  <div>
                <h5>{item.name}</h5>
                </div>
                <div>
                  <p style={{textAlign:'justify',maxLines:'3',lineHeight:'2',width:'100%',wordSpacing:'0'}}>
                  {item.description}</p>
                </div>
               </div>
               </center>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}