import { use, useState } from "react";

export default function Projects() {
  const [modalAppear, setModalAppear] = useState(false);
  const [appear, setAppear] = useState("");
  const [index, setIndex] = useState(null);

  const Projects = ["Marci Metzger Recreate"];
  const ProjectQuote = [
    "A complete redesign of the Marci Metzger website. I recreated the entire UI with a fresh, modern design approach—focusing on clean layouts, professional aesthetics, and improved user experience.",
  ];
  const ProjectUrl = ["https://marci-metzger-sooty.vercel.app"];

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
      {Projects.map((label, key) => (
        <div key={key}>
          <button
            className="lg:text-6xl md:text-4xl text-3xl"
            onClick={() => {
              openModal(key);
              console.log(label);
            }}
          >
            {label}
          </button>
        </div>
      ))}
      {/* Modal */}
      {modalAppear && (
        <div
          className="text-black fixed inset-0 bg-black/75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative lg:max-w-4xl max-w-xl max-h-full p-4 flex flex-col justify-center items-center gap-2 bg-white rounded-2xl">
            <p className="text-center pt-9">{appear}</p>
            <a
              className="bg-[#b8b8b8] py-1 px-3 text-center max-w-fit rounded-[6px] shine mb-4"
              href={ProjectUrl[index]}
            >
              Try now
            </a>
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
