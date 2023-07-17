import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <NavBar /> 
      <Home />
      <Skills />
      <Portfolio/>
      {/* <Experience/> */}



     <SocialLinks />

    </div>
  );
}

export default App;
