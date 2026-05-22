// a single line of syntaxed highlghted code.

"use client";
import { Token } from "@/app/data/generic/codeData";

export type CodeLineProps = {
  tokens: Token[];
};

export default function CodeLine({ tokens }: CodeLineProps) {
  return (
    <span className="font-mono text-3xl font-bold tracking-wide whitespace-nowrap">
      {tokens.map((t, i) => (
        <span key={i} style={{ color: t.color }}>
          {t.text}
        </span>
      ))}
    </span>
  );
}