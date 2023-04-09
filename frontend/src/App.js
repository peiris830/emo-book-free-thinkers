import React from 'react';
import Route from 'react-router-dom';
import Switch from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
      <div>
        <Header />

        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </main>

        <Footer />
      </div>
  );
}

export default App;
