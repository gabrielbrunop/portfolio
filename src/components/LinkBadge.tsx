import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { PropsWithChildren } from "react";

export function LinkBadge({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <Link href={href} className={badgeVariants({ variant: "secondary", className: "bg-gray-400" })}>{children}</Link>
  );
}
