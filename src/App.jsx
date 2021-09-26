// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Stylesheet
import "./App.scss";

// Components
import Navbar from "./Components/Navbar/Navbar";
import HomeHeader from "./Components/HomeHeader/HomeHeader";
import HomeMain from "./Components/HomeMain/HomeMain";
import HomeStories from "./Components/HomeStories/HomeStories";
import AboutHeader from "./Components/AboutHeader/AboutHeader";
import AboutDirector from "./Components/Aboutdirectors/AboutDirector";
import AboutClient from "./Components/AboutClient/AboutClient";
import ContactSection from "./Components/ContactSection/ContactSection";
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Home Page */}
        <Route exact path="/">
          <header id="Header">
            <Navbar homeColor="#f67e7e" />
            <HomeHeader />
          </header>
          <main id="Main">
            <HomeMain />
            <HomeStories />
            <ContactSection />
          </main>
          <footer id="Footer">
            <Footer homeColor="#f67e7e" />
          </footer>
        </Route>
        {/* About Page */}
        <Route path="/about">
          <header id="Header">
            <Navbar aboutColor="#f67e7e" />
            <AboutHeader />
          </header>
          <main id="Main">
            <AboutDirector />
            <AboutClient />
            <ContactSection />
          </main>
          <footer id="Footer">
            <Footer aboutColor="#f67e7e" />
          </footer>
        </Route>
        {/* Contact Page */}
        <Route path="/contact">
          <header id="Header">
            <Navbar homeColor="#fff" aboutColor="#fff" />
          </header>
          <main id="Main">
            <ContactHeader />
            <ContactForm />
          </main>
          <footer id="Footer">
            <Footer homeColor="#fff" aboutColor="#fff" />
          </footer>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
