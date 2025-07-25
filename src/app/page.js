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
          chars: "ЙЦУКЕНГШЩЗХФЫВАПОНЛДЖМЬЧТИЯ",
          revealDelay: 0.7,
          speed: 1,
        },
        ease: "power1.inOut",
      });
      gsap.to(nameRef2.current, {
        duration: 2,
        scrambleText: {
          text: "Front End Developer and Web Designer",
          chars: "ЙЦУКЕНГШЩЗХФЫВАПОНЛДЖМЬЧТИЯ",
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
    <div className="bg-black flex items-center justify-center h-[100dvh] gap-16 p-4 lg:p-7 fadein">
      <main className="md:p-5 p-3 bg-black flex flex-col items-center gap-[32px] h-full w-full border-2 border-white">
        <div className="text-center text-white">
          <h1 ref={nameRef} className="text-[clamp(1.5rem,8vw,4rem)] font-bold text-center">
            ANGELO SABORNIDO
          </h1>
          <h2 className="mt-2 text-[clamp(0.5rem,3vw,1rem)]" ref={nameRef2}>Front End Developer and Web Designer</h2>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center items-center sm:gap-4 gap-3 text-white">
            {[
              ["home", "Home"],
              ["about", "About Me"],
              ["certificates", "Certificates"],
              ["skills", "Skills"],
              ["projects", "Projects"],
              ["contact", "Contact"],
            ].map(([key, label]) => (
              <li key={key}>
                <button
                  onClick={() => setActiveSection(key)}
                  className="hover:text-red-400 transition-colors duration-200"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section className="w-full h-full bg-black text-white sm:p-4 p-2 overflow-hidden">
          {renderSection()}
        </section>
      </main>
    </div>
  );
}
