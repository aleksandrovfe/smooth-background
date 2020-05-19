import React from "react";
import "./App.scss";

import Header from "./components/Header";

import { Switch, Route } from "react-router-dom";

function App() {

  const sumEvenNumbers = (input) => {
    const evenNumber = input.map(el => {
      if (el % 2 === 0) {
        return el
      }
    }).filter(el => el)

    console.log(evenNumber)
    return evenNumber.reduce((prev, el) => prev + el);
 }

 console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
 

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About-me" component={About} />
              <Route exact path="/Skills" component={Skills} />
              <Route exact path="/Contact-me" component={Contact} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <p>
      I am an enthusiastic and well-motivated person looking for new opportunities in <b>FrontEnd Development.</b> Able to create high-quality and
      user-friendly Web products from scratch. Using modern technologies to design websibtes and related materials. Love coding, have extensive
      knowledge in JavaScript, React, Redux, HTML5, CSS/SASS. <br></br>
      <br></br>
      <b>Education:</b> Oles Honchar Dnipro National University, specialty: Faculty of Mechanics and Mathematics (teacher of mathematics).<br></br>
      <b>Frontend courses:</b> full-time online course 4 months HTML, CSS, JavaScript, React, Redux.<br></br>
      <b>Internships(6 months)</b>: Epam - HTML, CSS, JavaScript, Sass(SCSS), jQuery, Bootstrap, Unit Testing, Node.js(Express, MongoDB), Webpack.
    </p>
  );
}

function Skills() {
  return (
    <p>
      JavaScript(ES6), React, Redux, CSS, HTML5, BEM, SASS(SCSS), jQuery, Bootstrap, Unit Testing, Git<br></br> <br></br>
      initial introduction: TypeScript(React), Node.js(Express, MongoDB), Webpack.
      <br></br> <br></br>
      Languages: English (intermediate), Russian, Ukrainian.
    </p>
  );
}

function Contact() {
  return (
    <p>
      Dnipro, Ukraine <br></br>+38(067)-597-09-40 (Telegram, Viber), +38(099)-647-26-71<br></br> alexandrov6927@gmail.com <br></br> Skype -
      alexandrov6927 <br></br>{" "}
      <a className="contact-link" href="https://www.linkedin.com/in/aleksandr-aleksandrov-1040a8116/">
        LinkedIn
      </a>
    </p>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          Hi, I’m a <b> front-end developer </b> and I hope that this site will help you become more familiar with my projects and my skills.
        </h5>
      </div>
    </div>
  );
}
export default App;
