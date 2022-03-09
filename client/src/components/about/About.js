import React from "react";
// import "./About.css";
// import { Link } from "react-router-dom";

export default function About() {
  return (
<div className="bg">
    <div className="about">
      <div className="aboutWrapper">
        <h1 className="aboutTitle">ABOUT US</h1>
        <hr></hr>
        <h4 className="aboutDesc">
          Digital Resume builders
        </h4>
       
        <p> <span>We are </span>the digital resume building  platform which features the design to help you win your dream job.</p>
         <p> <span>Easy online resume builder, </span>Create an awesome resume, online profile without leaving your web browser. </p> 

        <p><span>Your data is safe, </span> The data is kept private and protected.</p>
                
        <p><span>Approved templates, </span>Professionally-designed resume templates. Just edit and download in 5 minutes </p>
        <h2>User-friendly. Professional. Effective. Try our resume builder today!!!</h2>
        {/* <Link to="/back">
          <button></button>
        </Link> */}
      </div>
    </div>
</div> 
  );
}
