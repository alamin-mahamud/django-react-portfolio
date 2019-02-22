import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';

const App = () => (
  <div>
    <Header />
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Hire Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>

    <Footer />
  </div>
);

export default App;