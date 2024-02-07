"use client"

import { NavigationMenu, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();

  const goTo = (href: string) => () => router.push(`#${href}`);

  return (
    <div className="w-full flex flex-row justify-between">
      <NavigationMenu className="flex flex-row gap-6 text-slate-400 [&>*]:cursor-pointer">
        <NavigationMenuLink onClick={goTo("tecnologias")}>Tecnologias</NavigationMenuLink>
        <NavigationMenuLink onClick={goTo("projetos")}>Projetos</NavigationMenuLink>
        <NavigationMenuLink onClick={goTo("contato")}>Contato</NavigationMenuLink>
      </NavigationMenu>
      <NavigationMenu className="hidden sm:flex flex-row gap-6 text-slate-400 [&>*]:w-18">
        <Link href="https://github.com/gabrielbrunop" legacyBehavior passHref>
          <NavigationMenuLink><FaGithub /></NavigationMenuLink>
        </Link>
        <Link href="https://www.linkedin.com/in/gabrielbrunoop/" legacyBehavior passHref>
          <NavigationMenuLink><FaLinkedin /></NavigationMenuLink>
        </Link>
        <Link href="https://twitter.com/gabrielbrunodev" legacyBehavior passHref>
          <NavigationMenuLink><FaSquareXTwitter /></NavigationMenuLink>
        </Link>
      </NavigationMenu>
    </div>
  )
}