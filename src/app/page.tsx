import MyProjects from "@/components/MyProjects";
import Navigation from "@/components/Navigation";
import TechCarousel from "@/components/TechCarousel";
import { getAge } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import SectionScroll from "@/components/SectionScroll";
import ContactList from "@/components/ContactList";

export default function Home() {
  return (
    <>
      <div className="flex flex-row px-[12%] sm:px-[20%] py-12">
        <Navigation />
      </div>
      <main className="flex flex-col gap-16 px-[12%] sm:px-[20%] py-12 antialiased pb-32">
        <section className="flex flex-col gap-8">
          <p className="font-medium text-xl sm:text-2xl text-indigo-400">Olá, meu nome é</p>
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl sm:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-slate-400 to-slate-500 font-sans font-bold">
              Gabriel Bruno
              <span className="text-3xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-600 font-sans font-bold">
                .dev
              </span>
            </h1>
            <h2 className="text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-slate-500 to-slate-600 font-sans font-bold">
              Eu desenvolvo softwares
            </h2>
          </div>
          <p className="font-medium text-xl text-slate-400">
            Eu sou um <span className="text-indigo-400">desenvolvedor de software com foco na web</span>, mas com muitos outros interesses também!
            Computação é a minha paixão.
          </p>
        </section>
        <section className="flex flex-col gap-24">
          <SectionScroll sectionName="tecnologias" />
          <div className="flex flex-col gap-12">
            <h2 className="font-bold text-2xl sm:text-3xl text-slate-500">Eu adoro aprender novas linguagens e frameworks!</h2>
            <div className="flex flex-col items-center justify-center">
              <TechCarousel />
            </div>
          </div>
          <Alert className="bg-slate-900 border-slate-900">
            <AlertTitle className="flex flex-row gap-2 text-lg text-slate-300">
              <HiMiniRocketLaunch color="#cccccc" className="text-4xl h-8 w-6" />
              <span>Muitas tecnologias</span>
            </AlertTitle>
            <AlertDescription>
              <p className="sm:text-lg text-slate-400 pl-4 sm:pl-8">
                Atualmente eu tenho {getAge(new Date("2002-07-11"))} anos, mas programo como hobby desde os 13. Aprendi muitas, muitas linguagens ao longo dos anos - aqui
                só menciono as mais recentes ou que tenho maior conhecimento, mas é muita coisa, mesmo!
              </p>
            </AlertDescription>
          </Alert>
        </section>
        <section className="flex flex-col gap-12">
          <SectionScroll sectionName="projetos" />
          <h2 className="font-bold text-2xl sm:text-3xl text-slate-500">Meus projetos</h2>
          <MyProjects />
        </section>
        <section className="flex flex-col gap-12">
          <SectionScroll sectionName="contato" />
          <h2 className="font-bold text-2xl sm:text-3xl text-slate-500">Contato</h2>
          <ContactList />
        </section>
      </main>
    </>
  );
}
