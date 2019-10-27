(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),r=t.n(i),c=(t(14),t(1)),s=t(2),o=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,", ",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpeg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.mobileno)))))))}}]),a}(n.Component),h=t(8),E=t.n(h),v=[{type:"HTML",level:100},{type:"CSS",level:100},{type:"Django",level:80},{type:"Python",level:80},{type:"C-language",level:80},{type:"React",level:70},{type:"Nodejs",level:30},{type:"Javascript",level:60},{type:"Android Application Development",level:70}],f={bar:"#3498db",title:{text:"#fff",background:"#2980b9"}},g=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},l.a.createElement("div",{style:{color:"#1a1a1a"}},e.specialization),l.a.createElement("div",null,l.a.createElement("span",null,"\u2022"),e.CGPA),l.a.createElement("div",null,l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)))))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work Experience"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.specialization),l.a.createElement("p",{className:"info"},l.a.createElement("div",{style:{color:"#1a1a1a"}},e.CompanyName),l.a.createElement("div",{style:{textAlign:"right"}},l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date",style:{color:"#0066ff"}},e.MonthOfLeaving," ",e.YearOfLeaving))),e.DESCRIPTION,l.a.createElement("h6",{style:{color:"#0066ff"}},l.a.createElement("span",null,"Achievements")),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"bars"},l.a.createElement(E.a,{skills:v,height:"5vh",animationDelay:200,colors:f})))))}}]),a}(n.Component),b=(t(16),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",{style:{textDecoration:"underline",textDecorationWidth:"10px",textDecorationColor:"#64b6d1",fontSize:"20px",textUnderlinePosition:"",textDecorationThickness:"5px",color:"#000608",borderbottom:"#64b6d1 7px solid",paddingBottom:"5px"}},l.a.createElement("span",null,"Projects")),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("center",null,l.a.createElement("div",{style:{marginLeft:"300px",display:"inline-block",textAlign:"justify",wordSpacing:"0",width:"100%"}},l.a.createElement("div",null,l.a.createElement("h5",null,e.name)),l.a.createElement("div",null,l.a.createElement("p",{style:{textAlign:"justify",maxLines:"3",lineHeight:"2",width:"100%",wordSpacing:"0"}},e.description))))})))))}}]),a}(n.Component)),N=(n.Component,function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Contact no : ",e.mobileno)))))}}]),a}(n.Component)),y=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),w={name:"Rizvi Mohd Hussain",role:"Android application developer and Web developer",linkedinId:"https://www.linkedin.com/in/mohd-hussain-rizvi-10899b164",skypeid:"https://twitter.com/Hussain100599",roleDescription:"adept at motivating self and others. Passionate about problem solving and learning new technologies.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/mohd-hussain-rizvi-10899b164",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/mohdhussain10",className:"fa fa-github"},{name:"skype",url:"https://twitter.com/Hussain100599",className:"fa fa-twitter"}],aboutme:"I am currently a final year student at The M.H.saboo siddik college of engineering and pursuing my B.E. from here. I am a self taught Full Stack Web Developer, currently diving deeper into Machine Learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",address:"India",mobileno:"+91-9833715470",education:[{UniversityName:"M.H.saboo siddik college of engineering",specialization:"Bachelor of Engineering (Computer Engineering)",MonthOfPassing:"June",YearOfPassing:"2020",CGPA:"7.31 CGPA (till 6th sem.)"},{UniversityName:"M.H.Saboo Siddik Polytechnic",specialization:"HSC (Computer Science)",MonthOfPassing:"May",YearOfPassing:"2016",CGPA:"78.15%"},{UniversityName:"B.S.Jondhale Vidyamandir English High School",specialization:"High School (SSC)",MonthOfPassing:"May",YearOfPassing:"2014",CGPA:"70.80%"}],work:[{CompanyName:"WayForLife",specialization:"Android application development intern",DESCRIPTION:"WayForLife is a non-profit NGO.",MonthOfLeaving:"February",YearOfLeaving:"2019",Achievements:"Developed an android application which help NGO to interact with a citizens. An application consist of all the latest android applications features."}],skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"},{skillname:"Android Application Development"},{skillname:"Web Development"},{skillname:"Python"}],portfolio:[{name:"Library Management System using Data structure in C-language",description:"This is an Library management system developed in c programming language using Data Structure. Functions : Add Books, Delete Books, Add Member, Delete Member, Search Book, Search Member"},{name:"Secure  Client-Server Application in Java",description:"This is an secure Client- Server application developed in Java."},{name:"Indian Sign Language Recognition (Machine Learning) ",description:"This project helps deaf and dumb people to communicate with normal people. This system recognizes sign language using Image Recognition and other machine learning algorithm."}],testimonials:[{description:"",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},k=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:w}),l.a.createElement(p,{resumeData:w}),l.a.createElement(g,{resumeData:w}),l.a.createElement(b,{resumeData:w}),l.a.createElement(N,{resumeData:w}),l.a.createElement(y,{resumeData:w}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.bc975eb1.chunk.js.map