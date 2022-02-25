import React from "react";
import "./global.scss";
import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Utility from "./components/utility/Utility";
//import Feature from "./components/features/Feature";
import Card from "./components/card/Card";
import ContextProvider from "./context/Context";
 import Review from "./components/review/Review";
import Gallary from "./components/gallary/Gallary";

const App = () => {
  
  return (
    <ContextProvider>
      <div className="App">
        <Topbar />
        <Navbar />
        <section className="section">
          <Home />
          <Card />
          <About />
          <Gallary />
          <Services />
          {/* <Feature /> */}
          <Review />
          <Utility />
          <Contact />
          <Footer /> 
        </section>
      </div>
    </ContextProvider>
  );
};

export default App;
