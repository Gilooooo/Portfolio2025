import { useState } from "react";

export default function Projects() {
  const [modalAppear, setModalAppear] = useState(false);
  const [appear, setAppear] = useState("");
  const [index, setIndex] = useState(null);

  const Projects = ["Marci Metzger Recreate","Capstone Autochecker Project", "Ojt Tracking System", "Recipe Book with AI" ];
  const ProjectQuote = [
    "A complete redesign of the Marci Metzger website. I recreated the entire UI with a fresh, modern design approach—focusing on clean layouts, professional aesthetics, and improved user experience.",
    "Checking Made easy with OCR",
    "OJT Tracking System – A lightweight monitoring tool for small companies that host 3–10 interns. Helps track tasks and progress of OJT students in an organized way. Note: Currently this is beta test right now and only non student type is working!",
    "Currently this is under construction",
  ];
  const ProjectUrl = [
    "https://marci-metzger-sooty.vercel.app",
    "https://capstone-auto-checker.vercel.app",
    "https://ojt-tracking.vercel.app",
    "Under Construction",
  ];

  const openModal = (index) => {
    setIndex(index);
    setAppear(ProjectQuote[index]);
    setModalAppear(true);
  };

  const closeModal = () => {
    setModalAppear(false);
    setAppear("");
    setIndex(null);
  };

  return (
    <div className="fadein w-full h-full text-end">
      <div className="flex flex-col sm:gap-13 gap-5">
        {Projects.map((label, key) => (
          <div key={key}>
            <button
              className="lg:text-6xl md:text-4xl text-3xl text-end"
              onClick={() => {
                openModal(key);
                console.log(label);
              }}
            >
              {label}
            </button>
          </div>
        ))}
      </div>
      {/* Modal */}
      {modalAppear && (
        <div
          className="text-black fixed inset-0 bg-black/75 flex items-center justify-center z-50 px-4"
          onClick={closeModal}
        >
          <div className="relative lg:max-w-4xl max-w-xl max-h-full p-4 flex flex-col justify-center items-center gap-2 bg-white rounded-2xl">
            <p className="text-center pt-9">{appear}</p>
            {ProjectUrl[index] == "Under Construction" ? (
              <a
                className="bg-[#e9e9e969] py-1 px-3 text-center max-w-fit rounded-[6px] shine-button mb-4"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Under Construction
              </a>
            ) : (
              <a
                className="bg-[#e9e9e969] py-1 px-3 text-center max-w-fit rounded-[6px] shine-button mb-4"
                href={ProjectUrl[index]}
              >
                Try now
              </a>
            )}
            <button
              className="absolute top-4 right-4 text-white text-xs
              bg-gray-500/50 rounded-full w-5 h-5 flex items-center
              justify-center hover:bg-gray-500/75"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
