import {
  FaHtml5,
  FaPython,
  FaReact,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiAdobeillustrator } from "react-icons/si";

export default function Skills() {
  return (
    <div className="fadein h-full w-full">
      <section
        className="
          grid 
          justify-center
          items-center          
          grid-cols-[repeat(auto-fit,minmax(50px,1fr))] 
          md:grid-flow-col 
          md:auto-cols-max 
          gap-4 
          place-items-center
          w-full
          h-full
        "
      >
        <FaHtml5 className="h-[50px] w-[50px]" />
        <IoLogoCss3 className="h-[50px] w-[50px]" />
        <RiNextjsFill className="h-[50px] w-[50px]" />
        <RiTailwindCssFill className="h-[50px] w-[50px]" />
        <FaPython className="h-[50px] w-[50px]" />
        <FaReact className="h-[50px] w-[50px]" />
        <FaBootstrap className="h-[50px] w-[50px]" />
        <SiMysql className="h-[50px] w-[50px]" />
        <FaFigma className="h-[50px] w-[50px]" />
        <SiAdobeillustrator className="h-[50px] w-[50px]" />
      </section>
    </div>
  );
}
