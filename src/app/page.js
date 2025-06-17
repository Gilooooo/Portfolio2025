"use client";
import AboutMe from "@/_Components/About_Me/AboutMe";
import Certificates from "@/_Components/Certificates/Certificates";
import Contact from "@/_Components/Contact/Contact";
import Home from "@/_Components/Home/Home";
import Projects from "@/_Components/Projects/Projects";
import Skills from "@/_Components/Skills/Skills";
import { useState } from "react";


export default function Hero() {
  const [activeSection, setActiveSection] = useState("home");

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
    <div className="bg-green-900 flex items-center justify-center h-[100dvh] gap-16 p-4 lg:p-7 ">
      <main className="p-5 bg-amber-700 flex flex-col items-center gap-[32px] h-full w-full border-2 border-solid border-black">
        <div className="text-center">
          <h1 className="text-5xl">
            ANGELO <p className="text-5xl">SABORNIDO</p>
          </h1>
          <h2>Front End Developer and web designer</h2>
        </div>
        <nav>
          <ul className="flex justify-center items-center sm:gap-4">
            <li>
              <button
                onClick={() => setActiveSection("home")}
                className="hover:text-red-400"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("about")}
                className="hover:text-red-400"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("certificates")}
                className="hover:text-red-400"
              >
                Certificates
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("skills")}
                className="hover:text-red-400"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("projects")}
                className="hover:text-red-400"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("contact")}
                className="hover:text-red-400"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <section className="w-full h-full bg-black text-white p-4">
          {renderSection()}
        </section>
      </main>
    </div>
  );
}
