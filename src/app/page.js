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
import { Circle } from "lucide-react";


gsap.registerPlugin(ScrambleTextPlugin);

export default function Hero() {
  const [activeSection, setActiveSection] = useState("home");
  const nameRef = useRef(null);
  const nameRef2 = useRef(null);

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
    <div className="bg-black flex items-center justify-center h-[100dvh] gap-16 md:p-3 p-2 lg:p-4 fadein">
      <main
        className={`md:p-5 p-3 bg-black flex sm:flex-col items-center gap-[32px] h-full w-full border-2 border-white overflow-hidden relative`}
      >
        <div className="flex flex-col sm:relative absolute z-10 sm:text-center text-start top-0 left-0 p-4  ">
          <div className="text-white pb-4" >
            <h1
              ref={nameRef}
              className="xl:text-8xl lg:text-6xl sm:text-5xl xs:text-3xl text-2xl font-bold animate-pulse"
            >
              ANGELO SABORNIDO
            </h1>
            <h2 className="mt-2 text-[clamp(0.7rem,3vw,1rem)]" ref={nameRef2}>
              Front End Developer and Web Designer
            </h2>
          </div>

          <nav>
            <ul className="flex flex-wrap sm:flex-row flex-col justify-center sm:items-center sm:gap-4 gap-3 text-white relative py-2 ">
              {[
                ["home", "Home"],
                ["about", "About Me"],
                ["certificates", "Certificates"],
                ["skills", "Skills"],
                ["projects", "Projects"],
                ["contact", "Contact"],
              ].map(([key, label]) => (
                <li key={key} className="sm:text-lg xs:text-sm text-[10px] block list-disc">
                  {activeSection == key ? (
                    <button className="text-red-500 animate-pulse transition-colors ease-in-out flex items-center gap-2 ">
                      <Circle size={8} fill="#fb2c36"/>{label}
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveSection(key)}
                      className="hover:text-red-400 transition-colors duration-200"
                    >
                      {label}
                    </button>
                  )}
                </li>
              ))}
              {/* {[
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
              ))} */}
            </ul>
          </nav>
        </div>

        <section
          className={`w-full h-full bg-black text-white overflow-hidden pt-20 ${
            activeSection == "skills" ? "" : "sm:p-4 "
          }`}
        >
          {renderSection()}
        </section>
      </main>
    </div>
  );
}
