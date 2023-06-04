import React from "react";
import {Footer,Blog,Possibility,Features,WhatGPT,Header, Footer} from './containers'
import{CTA,Brand,Navbar} from'./components'

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
         <Header/> 
      </div>
      <Brand/>
      <WhatGPT/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
