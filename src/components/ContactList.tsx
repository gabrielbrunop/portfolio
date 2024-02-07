import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { LinkBadge } from "./LinkBadge";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

type Contact = {
  title: string,
  username: string,
  link: string,
  icon: IconType
};

const projects: Contact[] = [
  {
    title: "X (Twitter)",
    username: "gabrielbrunodev",
    link: "https://twitter.com/gabrielbrunodev",
    icon: FaXTwitter
  },
  {
    title: "GitHub",
    username: "gabrielbrunop",
    link: "https://github.com/gabrielbrunop",
    icon: FaGithub
  },
  {
    title: "LinkedIn",
    username: "gabrielbrunoop",
    link: "https://www.linkedin.com/in/gabrielbrunoop/",
    icon: FaLinkedin
  }
];

export default function ContactList() {
  return (
    <div className="flex flex-row gap-4 md:gap-8 flex-wrap">
      {
        projects.map(p =>
          <Card className="bg-slate-950 border-slate-800">
            <CardHeader className="flex flex-row gap-4 items-center">
              {p.icon({ color: "#cccccc", className: "h-8 w-8 sm:h-12 sm:w-12" })}
              <CardTitle className="text-blue-400 text-lg sm:text-2xl">
                <Link href={p.link}>{p.username}</Link>
              </CardTitle>
            </CardHeader>
          </Card>  
        )
      }
    </div>
  );
}