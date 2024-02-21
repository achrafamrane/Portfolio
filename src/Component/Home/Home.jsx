import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import Experience from "../Experience/Experience";
import Tools from "../Tools/Tools";
import Languages from "../Languages/Languages";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  return (
    <div
      className={`h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Main isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Tools isDarkMode={isDarkMode} />
      <Languages isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
};

export default Home;
