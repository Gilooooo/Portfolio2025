"use client";
import AboutMe from "@/_Components/About_Me/AboutMe";
import Certificates from "@/_Components/Certificates/Certificates";
import Contact from "@/_Components/Contact/Contact";
import Home from "@/_Components/Home/Home";
import Projects from "@/_Components/Projects/Projects";
import Skills from "@/_Components/Skills/Skills";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { Braces, Brain, Circle, House, Medal, Phone, User } from "lucide-react";

gsap.registerPlugin(ScrambleTextPlugin);

export default function Hero() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");
  const nameRef = useRef(null);
  const nameRef2 = useRef(null);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(selectedTheme);
  };

  useEffect(() => {
    if (nameRef.current) {
      gsap.to(nameRef.current, {
        duration: 4,
        scrambleText: {
          text: "ANGELO SABORNIDO",
          chars: "01",
          revealDelay: 0.7,
          speed: 1,
        },
        ease: "power1.inOut",
      });
      gsap.to(nameRef2.current, {
        duration: 2,
        scrambleText: {
          text: "Front End Developer and Web Designer",
          chars: "01",
          revealDelay: 0.7,
          speed: 1,
        },
        ease: "power1.inOut",
      });
    }
  }, []);

  function renderSection() {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "about":
        return <AboutMe />;
      case "certificates":
        return <Certificates />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="bg-black flex items-center justify-center h-[100dvh] gap-16 p-7 fadein relative">
      <div className="absolute bottom-27 sm:-left-18 -left-18 transform -rotate-90 flex gap-2 text-white sm:text-md text-xs">
        <div className="flex gap-1 items-center" >
          <input 
            type="radio" 
            name="mode" 
            id="mode1" 
            className="sm:h-4 h-3 sm:w-4 w-3"
            checked={theme === "light"}
            onChange={() => handleThemeChange("light")}
          />
          <label htmlFor="mode1">Light Mode</label>
        </div>
        <div className="flex gap-1 items-center">
          <input 
            type="radio" 
            id="mode2" 
            name="mode" 
            className="sm:h-4 h-3 sm:w-4 w-3"
            checked={theme === "dark"}
            onChange={() => handleThemeChange("dark")}
          />
          <label htmlFor="mode2">Dark Mode</label>
        </div>
      </div>
      <main
        className={`md:p-5 p-3 bg-black flex flex-col items-center gap-[32px] h-full w-full border-2 border-white overflow-hidden`}
      >
        <div className="text-center text-white">
          <h1
            ref={nameRef}
            className="xl:text-8xl lg:text-6xl sm:text-5xl text-3xl font-bold text-center animate-pulse"
          >
            ANGELO SABORNIDO
          </h1>
          <h2 className="mt-2 text-[clamp(0.5rem,3vw,1rem)]" ref={nameRef2}>
            Front End Developer and Web Designer
          </h2>
        </div>

        <nav className="flex flex-col gap-4">
          <ul className="flex flex-wrap justify-center items-center sm:gap-4 xxs:gap-5 gap-3 text-white relative">
            {[
              ["home", "Home"],
              ["about", "About Me"],
              ["certificates", "Certificates"],
              ["skills", "Skills"],
              ["projects", "Projects"],
              ["contact", "Contact"],
            ].map(([key, label]) => (
              <li key={key} className="sm:text-lg text-sm sm:block hidden">
                {activeSection == key ? (
                  <button className="text-red-500 animate-pulse transition-colors flex items-center gap-1">
                    {" "}
                    <Circle size={8} fill="#F34636 " /> {label}
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveSection(key)}
                    className="hover:text-red-400 transition-colors duration-200 "
                  >
                    {label}
                  </button>
                )}
              </li>
            ))}
            {[
              ["home", House],
              ["about", User],
              ["certificates", Medal],
              ["skills", Brain],
              ["projects", Braces],
              ["contact", Phone],
            ].map(([key, Icons]) => (
              <li key={key} className="sm:text-lg text-sm sm:hidden">
                {activeSection == key ? (
                  <button className="text-red-500 animate-pulse transition-color">
                    <Icons size={28} />
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveSection(key)}
                    className="hover:text-red-400 transition-colors duration-200"
                  >
                    <Icons size={28} />
                  </button>
                )}
              </li>
            ))}
          </ul>
          <p className="sm:hidden block text-center text-sm animate-pulse text-white">
            {activeSection.toUpperCase()}
          </p>
        </nav>
        <section
          className={`w-full h-full bg-black text-white overflow-hidden ${
            activeSection == "skills" ? "" : "sm:p-4 p-2"
          }`}
        >
          {renderSection()}
        </section>
      </main>
    </div>
  );
}
