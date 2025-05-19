// src/App.tsx

import Header from "./components/header";
import Hero from "./components/hero";
import Aboutme from "./components/aboutme";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import Contactus from "./components/contactus";
import Experience from "./components/experience";

const App = () => {
  return (
      <div>
        <Header />
        <main className="mt-25 md:mt-22">
          <Hero/>
          <Aboutme/>
          <Education/>
          <Experience/>
          <Skills/>
          <Projects/>
          <Blogs/>
          <Contactus/>
        </main>
      </div>
  );
};

export default App;
