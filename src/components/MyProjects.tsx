import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { LinkBadge } from "./LinkBadge";

type Project = {
  name: string,
  github: string,
  site?: string,
  description: string
};

const projects: Project[] = [
  {
    name: "estechboard",
    site: "https://estechnews.vercel.app/",
    github: "https://github.com/gabrielbrunop/estechnews",
    description: "Um pequeno fórum de discussões e compartilhamento de notícias feito em Next.js, inspirado no Reddit e no agregador de notícias Hacker News.",
  },
  {
    name: "gabrielbruno.com.br",
    site: "https://gabrielbruno.com.br/",
    github: "https://github.com/gabrielbrunop/portfolio",
    description: "Portfólio pessoal feito em Next.js, com um design minimalista e responsivo.",
  }
];

export default function MyProjects() {
  return (
    <div className="flex flex-col gap-8">
      {
        projects.map(p =>
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-col gap-1">
              <CardTitle className="text-blue-400">
                <Link href={p.site ?? p.github}>{p.name}</Link>
              </CardTitle>
              <div className="flex flex-row gap-2">
                {p.github && <LinkBadge href={p.github}>GitHub</LinkBadge>}
                {p.site && <LinkBadge href={p.site}>Site</LinkBadge>}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">{p.description}</p>
            </CardContent>
          </Card>
        )
      }
    </div>
  );
}
