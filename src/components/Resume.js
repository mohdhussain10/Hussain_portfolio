import React, { Component } from 'react';
import SkillBar from 'react-skillbars';


const SKILLS1 = [
  { type: 'HTML', level: 100 },
  { type: 'CSS', level: 100 },
{type:'Django', level:80},
  { type: 'Python', level: 80 },
  { type: 'C-language', level: 80},
  { type: 'React', level: 70 },
  { type: 'Nodejs', level: 30 },
  { type: 'Javascript', level: 60 },
  { type: 'Android Application Development', level: 70 },

];
const colors5 = {
  bar: '#3498db',
  title: {
    text: '#fff',
    background: '#2980b9'
  }
};
const colors4 = {
  bar: '#ffa',
  title: {
    text: {
      hue: 45,
      saturation: {
        minimum: 30,
        maximum: 70
      },
      level: 50
    },
    background: {
      hue: 30,
      saturation: {
        minimum: 30,
        maximum: 70
      },
      level: {
        minimum: 0,
        maximum: 50
      }
    }
  }
};
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                            <div style={{color:"#1a1a1a"}}>
                          {item.specialization}</div>
                          <div>
                          <span>&bull;</span>
                          {item.CGPA}</div>
                          <div>
                          <span>&bull;</span>
                          <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></div>
                          
                         
                          </p>
                          
                         
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work Experience</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.specialization}</h3>

                          <p className="info" >
                          <div style={{color:"#1a1a1a"}}>{item.CompanyName}</div>
                          
                          <div style={{textAlign:"right"}}>
                          <span>&bull;</span> <em className="date"  style={{color:"#0066ff"}}>{item.MonthOfLeaving} {item.YearOfLeaving}</em></div></p>
                          
                          {item.DESCRIPTION}
                          <h6 style={{color:"#0066ff"}}><span>Achievements</span></h6>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

              

   				<div className="bars">
            
        
      <SkillBar skills={SKILLS1} height="5vh" animationDelay={200} colors={colors5}></SkillBar>
      

   				 

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}