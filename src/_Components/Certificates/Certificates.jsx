"use client";
import { useState } from "react";

export default function Certificates() {
  const [modalAppear, setModalAppear] = useState(false);
  const [certificateSelected, setCertificate] = useState("");

  const certificates = [
    "/Certificate1.png",
    "/Certificate2.png",
    "/Certificate3.jpg",
    "/Certificate4.jpg",
    "/Certificate5.jpg",
  ];

  const certificatesName = [
    "Introduction to Visual Graphic Design",
    "Developing Designs for User Interface",
    "JavaScript for Beginners - The Complete introduction to JS",
    "TailwindCSS from A to Z: Master Tailwind CSS Quickly",
    "AMAZING | JavaScript Programming with Examples in One Day"
  ];



  const openModal = (index) => {
    setCertificate(certificates[index]);
    setModalAppear(true);
  };

  const closeModal = () => {
    setModalAppear(false);
    setCertificate("");
  };

  return (
    <div className="flex justify-center items-center h-full w-full fadein overflow-hidden">
      <section className="text-gray-400 sm:p-3 w-full h-full flex flex-col items-end sm:gap-13 gap-5 text-end overflow-auto scroll-thin">
        {certificatesName.map((name, index) => (
          <div key={index} className="flex flex-col items-end ">
            <p 
              className="lg:text-6xl md:text-4xl text-3xl cursor-pointer shine py-2"
              onClick={() => openModal(index)}
            >
              {name}
            </p>
          </div>
        ))}
      </section>

      {/* Modal */}
      {modalAppear && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full p-4">
            <img 
              src={certificateSelected} 
              alt="Certificate" 
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl bg-gray-500/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-500/75"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
