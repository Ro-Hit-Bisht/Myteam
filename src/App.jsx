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
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <nav id="Navbar">
        <Navbar />
      </nav>

      {/* Header */}
      <header id="Header">
        <Switch>
          <Route exact path="/">
            <HomeHeader />
          </Route>
          <Route path="/about">
            <AboutHeader />
          </Route>
        </Switch>
      </header>

      {/* Main */}
      <main id="Main">
        <Switch>
          <Route exact path="/">
            <HomeMain />
            <HomeStories />
          </Route>
          <Route path="/about">
            <AboutDirector />
            <AboutClient />
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
        </Switch>
      </main>

      {/*Contact Section*/}
      <Switch>
        <Route exact path={["/", "/about"]}>
          <section id="Contact_Section">
            <ContactSection />
          </section>
        </Route>
      </Switch>

      {/* Footer */}
      <footer id="Footer">
        <Footer />
      </footer>
    </Router>
  );
};

export default App;
