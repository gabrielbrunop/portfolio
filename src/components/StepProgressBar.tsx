"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { FaBriefcase, FaFolder } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

// TODO: Sections should be refactored to its own file since now they are being
// used in multiple components.

const sections = [
  { title: "apresentacao", icon: AiFillHome },
  { title: "tecnologias", icon: RiComputerFill },
  { title: "experiencias", icon: FaBriefcase },
  { title: "projetos", icon: FaFolder },
  { title: "interesses", icon: FaHeart },
  { title: "contato", icon: FaEnvelope },
];

const getHeightStr = (h: number | string) => `${h}%`;

const getCurrentSectionIndex = (scrollPercentage: number, size: number) =>
  Math.floor((scrollPercentage / 120) * size);

// TODO: Since sections can vary in height, scrolling is not the optimal way
// to determine the current section. An option to be considered is to use
// IntersectionObserver instead.

export default function StepProgressBar() {
  const router = useRouter();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = Math.round(
        (scrollPosition / scrollHeight) * 100,
      );
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      handleScroll();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // TODO: `goTo` function should be refactored to its own file since now it is being
  // used in multiple components.

  const goTo = (href: string) => () =>
    router.push(`#${href}`, { scroll: false });

  return (
    <div className="xl:flex hidden isolate fixed right-40 h-[100%] justify-center items-center">
      <div className="h-[60%] w-[100%] flex flex-col items-center justify-center absolute px-24">
        <div className="absolute h-[100%] w-2 rounded-full py-12 bg-slate-700" />
        <div
          className="absolute top-0 w-2 rounded-full py-12 bg-blue-300 z-10"
          style={{ height: getHeightStr(scrollPercentage) }}
        />
      </div>
      <div className="h-[65%] w-[100%] flex flex-col items-center justify-between absolute px-24">
        {sections.map((s, i) => (
          <div className="w-12 h-12 text-slate-400 flex justify-center items-center z-20">
            {
              <s.icon
                onClick={goTo(s.title)}
                size={50}
                className="cursor-pointer"
                style={{
                  color:
                    getCurrentSectionIndex(
                      scrollPercentage,
                      sections.length,
                    ) === i
                      ? "white"
                      : undefined,
                  filter: "drop-shadow(black 0 0 10px)",
                }}
              />
            }
          </div>
        ))}
      </div>
    </div>
  );
}
