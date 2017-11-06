import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { selectSectionAction } from './actions';
import './Portfolio.css';
import personImage from './assets/person1.jpg';

const Navbar = () => (
  <header>
         
  </header>

)
const Header1 = ({ onCollapseClick}) => (
    <div className="container1">
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

const Header2 = () =>(
  <div className="content">
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


const Header = ({ onCollapseClick }) => (
   <header id="main-header">
      <div className="row no-gutters">
         <div className="col-lg-12 col-md-12">
            <div className="d-flex flex-column">
               <div>
                  <div className="d-flex flex-row align-items-stretch text-center">
                     <div
                        className="port-item button bg-orange letter p-4"
                        data-toggle="collapse"
                        data-target="#home"
                        onClick={() => onCollapseClick('home')}
                     ><span>Home</span>{' '}
                     </div>
                     <div
                        className="port-item bg-orange button letter p-4"
                        data-toggle="collapse"
                        data-target="#resume"
                        onClick={() => onCollapseClick('resume')}
                     ><span>Resume</span>{' '}
                     </div>
                     <div
                        className="port-item bg-orange button letter p-4"
                        data-toggle="collapse"
                        data-target="#work"
                        onClick={() => onCollapseClick('work')}
                     ><span>Work</span>{' '}
                     </div>
                     <div
                        className="port-item bg-orange letter button p-4"
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
                     Phone: (333) 333-3333
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
         <div className="row no-gutters">
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=255"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=255"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=256"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=256"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=257"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=257"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=258"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=258"
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
      <div className="card card-body bg-danger text-white py-5">
         <h2>Contact</h2>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem, dignissimos?
         </p>
      </div>
      <div className="card card-body py-5">
         <h3>Get in touch</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
            autem.
         </p>
         <form>
            <div className="form-group">
               <div className="input-group input-group-lg">
                  <span className="input-group-addon bg-danger text-white">
                     <i className="fa fa-user" />
                  </span>
                  <input
                     type="text"
                     className="form-control bg-dark text-white"
                     placeholder="Name"
                  />
               </div>
            </div>
            <div className="form-group">
               <div className="input-group input-group-lg">
                  <span className="input-group-addon bg-danger text-white">
                     <i className="fa fa-envelope" />
                  </span>
                  <input
                     type="email"
                     className="form-control bg-dark text-white"
                     placeholder="Email"
                  />
               </div>
            </div>
            <div className="form-group">
               <div className="input-group input-group-lg">
                  <span className="input-group-addon bg-danger text-white">
                     <i className="fa fa-pencil" />
                  </span>
                  <textarea
                     rows={5}
                     className="form-control bg-dark text-white"
                     placeholder="Message"
                     defaultValue={''}
                  />
               </div>
            </div>
            <input
               type="submit"
               defaultValue="Submit"
               className="btn btn-danger btn-block btn-lg"
            />
         </form>
      </div>
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
     <Header/>
     <Navbar />
       <Header1 />
       <Header2 />
      {/* <Header onCollapseClick={e => selectSectionAction(e)} />
      <Home selectedSection={selectedSection} />
      <Resume selectedSection={selectedSection} />
      <Work selectedSection={selectedSection} />
      <Contact selectedSection={selectedSection} /> */}
      {/* <Footer /> */}
   </div>
);

const mapToProps = ({ selectedSection, student }) => ({
   selectedSection,
   student
});
export default connect(mapToProps)(Portfolio);
