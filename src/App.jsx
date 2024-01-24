import {
  Navbar,
  Home,
  SocialIcons,
  About,
  Portfolio,
  Experience,
  Contact,
} from "./components/index";
function App() {
  return (
    <div className="font-mono bg-gradient-to-b from-black to-gray-800">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialIcons />
    </div>
  );
}

export default App;
