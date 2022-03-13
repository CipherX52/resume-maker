
import React from "react";
import "./About.css";
// import { Link } from "react-router-dom";

export default function About() {
 return (
  <div className='container'>
     <div className='boxcontainer3'>
       <div className="bg">
          <div className="about">
            <div className="aboutWrapper">
              <h1 className="aboutTitle">ABOUT US</h1>
              
                        <h4 className="aboutDesc">
                          Digital Resume builders
                        </h4>
                
                        <p><span>We are </span>the digital resume building  platform. </p>
                        <p> <span>Easy online resume builder, </span>Create an awesome resume.</p> 

                        <p><span>Your data is safe, </span> The data is kept private and protected.</p>
                                
                        <p><span>Approved templates, </span>Professionally-designed resumes.</p>
                        <h2>User-friendly. Professional. Effective. Try our resume builder today!!!</h2>
                        <img className="imgclass3" src="https://media.istockphoto.com/vectors/flat-design-concept-of-our-team-about-us-community-management-vector-id1166406650?k=20&m=1166406650&s=612x612&w=0&h=Ynf0CRHBwMdXgcaXOKlSL1mPeZLQL7we-XJJK-scczk="/>
              {/* <Link to="/back">
                <button></button>
              </Link> */}
            </div>
        </div>
   </div> 
 </div>
</div>


);
}