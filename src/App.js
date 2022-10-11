import './App.css';
import { useState } from 'react';
import banner from "./Images/banner.jpg";
import apexlogo from "./Images/APEX-logo.svg";
import deadicon from "./Images/Dead-Simple.svg";
import codingicon from "./Images/coding.svg";
import easyuseicon from "./Images/Easy-to-Use.svg";
import aboutUs from "./Images/About-us-apex.png";
import alps from "./Images/AlpsN.jpg";
import everest from "./Images/EverestN.jpg";
import fuji from "./Images/FujiN.jpg";
import mount from "./Images/mount BlancN.jpg";
import olympus from "./Images/OlympusN.jpg";
import eiger from "./Images/EigerN.jpg"
import contact from "./Images/contact.png"
import facebook from "./Images/facebook.svg";
import instagram from "./Images/instagram.svg";
import linkedin from "./Images/linkedin.svg";
import returntop from "./Images/Returntop.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import {VscCircleFilled} from "react-icons/vsc";


function App() {

const [first, setfirst] = useState("");
const [last, setlast] = useState("");
const [email, setemail] = useState("");
const [phone, setphone] = useState("");

  function moveTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
    <body >
    {/*navbar*/}
    <nav>
    <div className='navbarhead'>
      <ul >
      <li class="nav-item"><a class="nav-link" href="#home">HOME</a></li>
      <li><VscCircleFilled class="nav-item" style={{width:"10px",height:"10px",}}/></li>
      <li class="nav-item"><a class="nav-link" href="#about">ABOUT US</a></li>      
      <li class="nav-item"><img src={apexlogo} style={{padding:"0px 140px"}} alt="apexlogo"/></li>
      <li class="nav-item"><a class="nav-link" href="#services">SERVICES</a></li>
      <li><VscCircleFilled class="nav-item" style={{width:"10px",height:"10px"}}/></li>
      <li class="nav-item"><a class="nav-link" href="#contact">CONTACT</a></li>
      </ul></div></nav>

    {/*title*/}
    <div id="home" className="titleimg">
    <img src={banner} alt="banner" width="1920px" height="954px"/></div>
    <div className='content'><b>Apex,</b><br/>
    {`Taking your business 
    to its Peak`}<br/>
    <button className='viewservice'>View Services</button>
    <img className="returntop" onClick={moveTop} src={returntop} alt="return-to-top" width="40px" height="40px"/>
    </div>
   
    {/*about us*/}
    <div className='about-us row'>
      <div className='col-2'></div>
      <div className='col-4 colOne'><br/><br/><br/><br/>
        <div id="about" style={{fontSize:"50px",lineHeight:1.0}}>Feel Ecstatic As To <b>Conquering the Everest</b></div>
        <hr/><br/>
        <div style={{fontSize:"25px"}}><b>About Us</b></div><br/>
        <div>Apex is a UK/India based firm that specializes in software development. We as a the company offer<br/>
         a wide range of high quality services in the development, delivery, and maintenance of software in UK/India.<br/><br/>
          Our key market advantage is a very competitive pricing strategy to deliver quality software solutions.<br/><br/>
          We help companies make an impact using cutting edge technology that helps them transform, grow, or bounce back in today’s competitive digital landscape.</div>
      </div>
      <div className='col-5 colTwo'><br/><br/><br/><br/>
        <img className='imageabout' src={aboutUs} alt="about-us"/>
      </div>
    </div>
    <div className='threegrid row'>
      <div className='col-4 colone'>
        <div className='imgbackground'><img src={easyuseicon} alt='easy-to-use' width="43px" height="46px"/></div><br/>
        <div style={{fontSize:"25px"}}><b>Easy to Use</b></div><br/>
        <div style={{fontSize:"15px",width:"250px"}}>Clean & fully commented code and a stunning documentation make it very easy to use.</div>
      </div>
      <div className='col-4 coltwo'>
      <div className='imgbackground'><img src={deadicon} alt='Dead-Simple' width="43px" height="46px"/></div><br/>
      <div style={{fontSize:"25px"}}><b>Dead Simple</b></div><br/>
      <div style={{fontSize:"15px",width:"250px"}}>Very lightweight, easy to use, and fast loading code. Clean design focused on good readability.</div>
      </div>
      <div className='col-4 colthree'>
      <div className='imgbackground'><img src={codingicon} alt='coding' width="43px" height="46px"/></div><br/>
      <div style={{fontSize:"25px"}}><b>Coder friendly</b></div><br/>
      <div style={{fontSize:"15px",width:"250px"}}>With the Concept template you can create professional and beautiful business or personal website.</div>
      </div>
  </div>

   {/*about us*/} 
   <div id="services" className='services'>
   <div className='centerser' style={{fontSize:"25px",marginTop:"180px"}}><b>Services</b></div>
   <div className='centerser' style={{marginBottom:"30px"}}>Equipping and Gearing you Up for the Climb to Glory</div>
      
      <div className='containerimg'>
      <img src={everest} alt="everest" width="580px" height="300px"/>
      <div className='titleimg'>Everest</div><button>Get quote</button>
      <div className='subtitle'>Lead Management System</div>
      <div className='contentimg'>Lead management is the process of capturing leads, tracking all touchpoints with your business-like email, chat, or website behavior, and qualifying and engaging them until they purchase your product.</div>          
      </div>
      <div className='containerimg'>
      <img src={fuji} alt="everest" width="580px" height="300px"/> 
      <div className='titleimg'>Fuji</div><button>Get quote</button>
      <div className='subtitle'>Procurement Management System</div>
      <div className='contentimg'>It encompasses the evaluation, selection, and creation of formal contractual agreements as well as managing the company’songoing supplier relationships.</div>          
      </div>
      <div className='containerimg'>
      <img src={alps} alt="everest" width="580px" height="300px"/> 
      <div className='titleimg'>Alps</div><button>Get quote</button>
      <div className='subtitle'>Project Management System</div>
      <div className='contentimg'>A project management system is a combination of methodologies and technologies that assist you with the planning, organizing,and scheduling of everything that contributes to the success of a project.</div>          
      </div>
      <div className='containerimg'>
      <img src={eiger} alt="everest" width="580px" height="300px"/>  
      <div className='titleimg'>Eiger</div><button>Get quote</button>
      <div className='subtitle'>HRMS</div>
      <div className='contentimg'>It refers to a suite of software that organizations use to manage internal HR functions. From employee data management to payroll, recruitment, benefits, training, talent management, employee engagement, and employee attendance, HRMS software helps HR professionals manage the modern workforce.</div>          
      </div>
      <div className='containerimg'>
      <img src={mount} alt="everest" width="580px" height="300px"/>  
      <div className='titleimg'>Mount Blanc</div><button>Get quote</button>
      <div className='subtitle'>Recruitment Management System</div>
      <div className='contentimg'>Recruitment Management System (RMS) is an HR tool used to automate and manage a company’s recruitment process. An RMS helps you publish job postings, share on different sourcing channels, manage candidates, schedule interviews, and enable your end-to-end hiring process.</div>          
      </div>
      <div className='containerimg'>      
      <img src={olympus} alt="everest" width="580px" height="300px"/>
      <div className='titleimg'>Olympus</div><button>Get quote</button>
      <div className='subtitle'>Ticketing Management System</div>
      <div className='contentimg'>A ticketing system collects and manages all customer support interactions from different platforms, including phone, live chat, email, and social media. This management system enables IT, support agents, to route various types of tickets to the correct person, resource, or department to obtain the fastest resolution.</div>          
      </div>     
      </div>
   
   
   {/*contact us*/}
   <div id="contact" className='contact-us'>
    <div style={{fontSize:"50px",marginTop:"100px"}}>Reaching the Summit is Never an Uphill Task</div>
    <div className='loginimg'>
      <img src={contact} alt="contact"/><div className='login'>
        <div style={{marginLeft:"50px",fontSize:"25px",marginTop:"30px"}}><b>Contact Us</b></div><br/>
        <form>
        <label>First Name</label><br/>
        <input type="text" value={first} onChange={(e)=>{setfirst(e.target.value)}} style={{width:"543px",height:"50px"}}/><br/><br/>
        <label>Last Name</label><br/>
        <input type="text" value={last} onChange={(e)=>{setlast(e.target.value)}} style={{width:"543px",height:"50px"}}/><br/><br/>
        <label>Email</label><br/>
        <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} style={{width:"543px",height:"50px"}}/><br/><br/>
        <label>Phone number</label><br/>
        <input type="tel" value={phone} onChange={(e)=>{setphone(e.target.value)}} style={{width:"543px",height:"50px"}}/><br/><br/>
        <button>Submit</button></form>
      </div>
    </div>

   </div>

    {/*footer*/}
    <div className='footer'>
    <li style={{fontSize:"15px"}}><b>PRIVACY POLICY</b></li>
    <li style={{fontSize:"15px"}}><b>TERMS & CONDITIONS</b></li>
    <li className='center'>© 2022 Copyright Apex</li>
    <li><img src={facebook} alt="facebook"/><img src={instagram} alt="instagram"/><img src={linkedin} alt="linkedin"/></li>
    </div>

   </body>
    
    
    </>
  );
}

export default App;

