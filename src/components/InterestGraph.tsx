"use client";

import { GraphCanvas, Theme, darkTheme } from 'reagraph';
import { Card, CardContent } from './ui/card';
import { Relation, getEdgesFromRelations, getNodesFromRelations } from '@/lib/relations';

const relations = [
  { source: 'Computer Science', target: 'Web Development' },
  { source: 'Computer Science', target: 'Functional Programming' },
  { source: 'Computer Science', target: 'Languages and Compilers' },
  { source: 'Computer Science', target: 'Operating Systems' },
  { source: 'Functional Programming', target: 'Lisp' },
  { source: 'Functional Programming', target: 'ML' },
  { source: 'ML', target: 'OCaml' },
  { source: 'Web Development', target: 'React' },
  { source: 'Lisp', target: 'Common Lisp' },
  { source: 'React', target: 'Next.js' },
  { source: 'Web Development', target: 'TypeScript' },
  { source: 'Web Development', target: 'TypeScript' },
  { source: 'Relational Databases', target: 'PostgreSQL' },
  { source: 'Databases', target: 'Relational Databases' },
  { source: 'Computer Science', target: 'Databases' },
  { source: 'Operating Systems', target: 'Linux' },
  { source: 'Linux', target: 'Vim' },
  { source: 'Vim', target: 'Neovim' },
  { source: 'Web Development', target: 'Tailwind CSS' },
  { source: 'Computer Science', target: 'Low Level Programming' },
  { source: 'Low Level Programming', target: 'C++' },
  { source: 'Low Level Programming', target: 'Rust' },
  { source: 'Computer Science', target: 'Web3' },
  { source: 'Web3', target: 'Solana' },
  { source: 'Rust', target: 'Solana' },
  { source: 'Discrete Math', target: 'Functional Programming' },
  { source: 'Discrete Math', target: 'First Order Logic' },
  { source: 'Discrete Math', target: 'Set Theory' },
  { source: 'Discrete Math', target: 'Type Theory' },
  { source: 'Set Theory', target: 'Relational Databases' },
] satisfies Relation[];

const nodes = getNodesFromRelations(relations);
const edges = getEdgesFromRelations(relations, nodes);

const theme = {
  ...darkTheme,
  canvas: {
    ...darkTheme.canvas,
    background: "#0f172a",
  },
} satisfies Theme;

export default function InterestGraph() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Card className="bg-slate-900 border-slate-800 w-full h-[32em] flex flex-col items-center justify-center">
        <CardContent className="relative w-[99%] h-[99%] flex">
          <GraphCanvas
            maxDistance={1700}
            sizingType="centrality"
            theme={theme}
            nodes={nodes}
            edges={edges}
          />
        </CardContent>
      </Card>
    </div>
  );
}
