import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const jobExperiences = [
  {
    titles: ["Software Developer"],
    link: "https://www.linkedin.com/company/flowih/",
    company: "Flowih",
    start: "03-01-2024",
    end: "06-01-2024",
    technologies: ["React", "React Native", "Node.js", "AWS", "TypeScript"],
    description: "Desenvolvedor de software pleno.",
  },
  {
    titles: ["Co-Founder", "Software Developer"],
    link: "https://www.linkedin.com/company/mevon-web/",
    company: "Mevon",
    start: "02-01-2024",
    technologies: ["Next.js", "Node.js", "TypeScript", "Docker"],
    description: "Desenvolvimento de aplicativos web.",
  },
];

export default function JobExperiences() {
  return (
    <div className="flex flex-col gap-8">
      {jobExperiences.map((p, i) => (
        <Card key={i} className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-col gap-1">
            <Link href={p.link}>
              <CardTitle className="text-blue-400 pt-2 pb-1">
                {p.company}
              </CardTitle>
            </Link>
            <div className="flex flex-row gap-2">
              {p.titles.map((title) => (
                <Badge className="bg-slate-300 text-black hover:bg-slate-400">
                  {title}
                </Badge>
              ))}
            </div>
            <div className="flex flex-row gap-2">
              {p.technologies.map((tech) => (
                <Badge className="bg-blue-400 text-black hover:bg-blue-600">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-400">{p.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
