"use client"

import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
  sectionName: string
};

export default function SectionScroll({ sectionName }: Props) {
  const params = useParams();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionName === window.location.hash?.slice(1)) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [ref, params]);

  return (
    <div ref={ref}></div>
  );
}
