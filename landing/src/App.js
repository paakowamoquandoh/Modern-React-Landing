import React from "react";
import './App.css';
import { Article, Brand, CTA, Navbar } from "./components";
import { Blog, Features, Footer, Header, Prospects, WhyUs } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradientBg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhyUs/>
      <Features/>
      <Prospects/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
