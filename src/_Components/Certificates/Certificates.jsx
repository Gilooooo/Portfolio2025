export default function Certificates() {
  const certificates = [
    "/Certificate1.png",
    "/Certificate2.png",
    "/Certificate1.png",
    "/Certificate2.png",
  ];

  return (
    <div className="flex justify-center items-center h-full w-full fadein">
      <section className="bg-red-900 p-3 w-full h-3/4 sm:w-3/4 md:w-2/3 rounded-lg overflow-hidden">
        <div
          className="
            flex 
            flex-wrap
            md:flex-nowrap
            md:overflow-x-auto 
            scroll-smooth 
            scroll-thin 
            md:snap-x 
            md:snap-mandatory
            gap-4 
            h-full
            justify-center
            items-center
          "
        >
          {certificates.map((src, index) => (
            <div
              key={index}
              className="
                snap-center 
                flex-shrink-0 
                w-full
                sm:w-[48%]
                md:w-[45%] 
                lg:w-[30%] 
                bg-black 
                rounded-lg 
                overflow-hidden 
                shadow-md 
                h-[200px] 
                sm:h-[250px] 
                md:h-full
              "
            >
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
