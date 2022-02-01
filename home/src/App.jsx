import React from "react";
import "./index.scss";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";
import HomeContent from "./HomeContent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <HomeContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
