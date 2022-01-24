import React from "react";
import "./index.scss";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";


const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header app={{name: 'home'}}/>
    <div className="my-10">
      Home Page Content
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
