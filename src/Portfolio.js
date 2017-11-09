import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { selectSectionAction } from './actions';
import './Portfolio.css';
import personImage from './assets/person1.jpg';

const Header = ({ onCollapseClick }) => (
   <header id="main-header">
      <div className="row no-gutters">
         <div className="col-lg-12 col-md-12">
            <div className=" flex-column">
               <div>
                  <div className="d-flex flex-row text-center">
                     <div
                        className="port-item button bg-orange letter p-4"
                        data-toggle="collapse"
                        data-target="#header1"
                        onClick={() => onCollapseClick('header1')}
                     ><span>Home</span>{' '}
                     </div>
                     <div
                        className="port-item button bg-orange letter p-4"
                        data-toggle="collapse"
                        data-target="#resume"
                        onClick={() => onCollapseClick('resume')}
                     ><span>Resume</span>{' '}
                     </div>
                     <div
                        className="port-item button bg-orange letter p-4"
                        data-toggle="collapse"
                        data-target="#work"
                        onClick={() => onCollapseClick('work')}
                     ><span>Work</span>{' '}
                     </div>
                     <div
                        className="port-item button bg-orange letter p-4"
                        data-toggle="collapse"
                        data-target="#contact"
                        onClick={() => onCollapseClick('contact')}
                     ><span>Contact</span>{' '}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
);

const Header1 = ({ selectedSection }) => (
  <div id="header1" className={'collapse ' + (selectedSection == 'header1' ? 'show' : 'hide')}>
      <div className="title">
Diana María
</div>
      <br />
      <div className="title">Silva</div>
      <br />
<br />
      {/* <div className="subtitle"> FRONT-END DEVELOPER JS - REACT - CSS - HTML - JQUERY </div> */}
    </div>

)

const Header2 = ({ onCollapseClick }) =>(
<div className="content" id="header2">
      <div className="content__container">
        <p className="content__container__text">
          Front-end
        </p>
        <ul className="content__container__list">
          <li className="content__container__list__item">developer!</li>
          <li className="content__container__list__item">
Javascript !
</li>
          <li className="content__container__list__item">
React.js !
</li>
          <li className="content__container__list__item"> html - css</li>
        </ul>
      </div>
    </div>
)

const Home = ({ selectedSection }) => (
   <div
      id="home"
      className={'collapse ' + (selectedSection == 'home' ? 'show' : 'hide')}
   >
      <div className="card card-body bg-primary text-white py-5">
         <h2>Welcome to my page</h2>
         <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis, quia.
         </p>
      </div>
      <div className="card card-body py-5">
         <h3>My Skills</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            nulla et, modi harum hic deserunt.
         </p>
         <hr />
         <h4>HTML</h4>
         <div className="progress mb-3">
            <div
               className="progress-bar bg-success"
               style={{ width: '100%' }}
            />
         </div>
         <h4>CSS</h4>
         <div className="progress mb-3">
            <div
               className="progress-bar bg-success"
               style={{ width: '100%' }}
            />
         </div>
         <h4>JavaScript</h4>
         <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: '90%' }} />
         </div>
         <h4>PHP</h4>
         <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: '80%' }} />
         </div>
         <h4>Python</h4>
         <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: '70%' }} />
         </div>
      </div>
   </div>
);

const Resume = ({ selectedSection }) => (
   <div
      id="resume"
      className={'collapse ' + (selectedSection == 'resume' ? 'show' : 'hide')}
   >
      <div className="card card-body bg-success text-white py-5">
         <h2>My Resume</h2>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nobis
            ut labore iure tempore qui!
         </p>
      </div>
      <div className="card card-body py-5">
         <h3>Where have I worked?</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            eligendi, ex officia itaque tempora natus.
         </p>
         <div className="card-deck">
            <div className="card">
               <div className="card-body">
                  <h4 className="card-title">Devmasters</h4>
                  <p className="card-text">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Quod, nostrum.
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                     Position: Full Stack Developer
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                     Phone: (444) 444-4444
                  </p>
               </div>
               <div className="card-footer">
                  <h6 className="text-muted">Dates: 2015 - 2017</h6>
               </div>
            </div>
            <div className="card">
               <div className="card-body">
                  <h4 className="card-title">Websites Pro</h4>
                  <p className="card-text">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Quod, nostrum.
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                     Position: Front End Developer
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                     Phone: 953728070
                  </p>
               </div>
               <div className="card-footer">
                  <h6 className="text-muted">Dates: 2013 - 2015</h6>
               </div>
            </div>
            <div className="card">
               <div className="card-body">
                  <h4 className="card-title">123 Designs</h4>
                  <p className="card-text">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Quod, nostrum.
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                     Position: Designer
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                     Phone: (222) 222-2222
                  </p>
               </div>
               <div className="card-footer">
                  <h6 className="text-muted">Dates: 2010 - 2013</h6>
               </div>
            </div>
         </div>
      </div>
   </div>
);

const Work = ({ selectedSection }) => (
   <div
      id="work"
      className={'collapse ' + (selectedSection == 'work' ? 'show' : 'hide')}
   >
      <div className="card card-body bg-warning py-5">
         <h3>My Portfolio</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
            adipisci?
         </p>
      </div>
      <div className="card card-body py-5">
         <h3>What have I built?</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
            eum.
         </p>
         <div className="row no-gutters">
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=251"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=251"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=252"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=252"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=253"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=253"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=254"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=254"
                     className="img-fluid"
                  />
               </a>
            </div>
         </div>
      </div>
   </div>
);

const Contact = ({ selectedSection }) => (
   <div
      id="contact"
      className={'collapse ' + (selectedSection == 'contact' ? 'show' : 'hide')}
   >
   <section id="hire">
        <h1>
Contact Me
</h1>
        <form>
          <div className="field name-box">
            <input
type="text"
id="name"
placeholder="Who Are You?" />
            <label htmlFor="name">Name</label>
            <span className="ss-icon">check</span>
          </div>
          <div className="field email-box">
            <input
type="text"
id="email"
placeholder="name@email.com" />
            <label htmlFor="email">Email</label>
            <span className="ss-icon">check</span>
          </div>
          <div className="field msg-box">
            <textarea
id="msg"
rows={4}
placeholder="Your message goes here..."
defaultValue={""} />
            <label htmlFor="msg">Msg</label>
            <span className="ss-icon">check</span>
          </div>
          <input
className="button"
type="submit"
defaultValue="Send" />
        </form>
      </section>

   </div>
);

const Footer = () => (
   <footer id="main-footer" className="p-5 bg-dark text-white">
      <div className="row">
         <div className="col-md-6">
            <a href="#" className="btn btn-outline-light">
               <i className="fa fa-cloud" /> Download Resume
            </a>
         </div>
      </div>
   </footer>
);

const Portfolio = ({ selectedSection, student }) => (
   <div className="container">
     <Header onCollapseClick={e => selectSectionAction(e)} />
       <Header1 selectedSection={selectedSection}/>
       <Header2 />
      {/* <Home selectedSection={selectedSection} /> */}
      <Resume selectedSection={selectedSection} />
      <Work selectedSection={selectedSection} />
      <Contact selectedSection={selectedSection} />
      {/* <Footer /> */}
   </div>
);

const mapToProps = ({ selectedSection, student }) => ({
   selectedSection,
   student
});
export default connect(mapToProps)(Portfolio);
