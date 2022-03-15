import React from 'react';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
import Pic01 from '../images/pic01.jpg';
import Pic02 from '../images/pic02.jpg';
import Pic03 from '../images/pic03.jpg';


function Home(props) {
    return (
		
        <div>
            {/* Page Wrapper */}
            <div id="page-wrapper">
			<div className="content">
                {/* Banner */}
				<section id="banner">
					<div className="content">
						<header>
							<h2>Create your resume now</h2>
							 <p>And there are no hoverboards or flying cars.<br />
							Just apps. Lots of mother flipping apps.</p> 
						</header>
						<span className="image"><img src={Pic01} alt="" /></span>
					</div>
					<a href="#one" className="goto-next scrolly">Next</a>
				</section>
				</div>

                {/* One */}
				<section id="one" className="spotlight style1 bottom">
					<span className="image fit main"><img src={Pic02} alt="" /></span>
					<div className="content">
						<div className="container">
							<div className="row">
								<div className="col-4 col-12-medium">
									<header>
										<h2>Digital resume builder
											</h2>
										<p>Build a Professional Resume in Minutes</p>
									</header>
								</div>
								<div className="col-4 col-12-medium">
									<p>Creating a resume is a daunting task. Nothing but stress, confusion, and wasting precious hours on making a good-looking template,Let us take over.</p>
								</div>
								<div className="col-4 col-12-medium">
									<p>Who have you always dreamt of becoming? We bet a resume writer didn’t make it to that list. So don’t let a piece of paper turn your dreams into nightmares. With  Digital resume builder, we take care of the details, so you can focus on what really matters: your career..</p>
								</div>
							</div>
						</div>
					</div>
					<a href="#two" className="goto-next scrolly">Next</a>
				</section>



                {/* Two */}
                <section id="two" className="spotlight style2 right">
					<div className="image"><img src={Pic03} alt="" /></div>
					<div className="content">
						<header>
							<h2>Digital resume builder</h2>
							
						</header>
					<ul>
						<li>Pick a template</li>
						<li>Fill in the blanks.</li>
						<li> Personalise your document.</li>
					</ul>
						<ul className="actions">
						
						</ul>
					</div>
					<a href="#three" className="goto-next scrolly">Next</a>
				</section>

                {/* Three */}
                <section id="three" className="spotlight style3 left">
					{/* <span class="image"><img src={Pic04}  alt="" /></span> */}
					<div className="content">
						<header>
							<h2>Make your Resume
								picture-perfect
								and win that job!</h2>
							
						</header>
						<p></p>
						<ul className="actions">
						
						</ul>
					</div>
                </section>


                

                {/* Footer */}
                <footer id="footer">
                    <ul className="icons">
                        <li><Link to="#" class="icon brands fa-twitter"><span class="label">Twitter</span></Link></li>
                        <li><Link to="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></Link></li>
                        <li><Link to="#" class="icon brands fa-instagram"><span class="label">Instagram</span></Link></li>
                        <li><Link to="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></Link></li>
                        <li><Link to="#" class="icon solid fa-envelope"><span class="label">Email</span></Link></li>
                    </ul>
                    <ul className="copyright">
                        <li>ICTAK</li>
                    </ul>
                </footer>

            </div>
        </div>
    );
}

export default Home;