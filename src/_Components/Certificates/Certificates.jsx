export default function Certificates() {
  const certificates = [
    "/Certificate1.png",
    "/Certificate2.png",
    "/Certificate1.png",
    "/Certificate2.png",
  ];

  return (
    <div className="flex justify-center items-center h-full w-full fadein overflow-hidden">
      <section className="text-gray-400 sm:p-3 w-full h-full flex flex-col items-end sm:gap-16 gap-9 text-end overflow-auto scroll-thin">
        <p className="lg:text-6xl md:text-4xl text-3xl">Introduction to Visual Graphic Design</p>
        <p className="lg:text-6xl md:text-4xl text-3xl">Developing Designs for User Interface</p>
        <p className="lg:text-6xl md:text-4xl text-3xl">JavaScript for Beginners - The Complete introduction to JS</p>
        <p className="lg:text-6xl md:text-4xl text-3xl">TailwindCSS from A to Z: Master TailwindCSS Quickly</p>
        <p className="lg:text-6xl md:text-4xl text-3xl">AMAZING | JavaScript Programming with Examples in One Day</p>
      </section>
    </div>
  );
}
