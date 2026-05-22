import { ReactNode } from "react";
// frosty background section with a glassmorphism effect (used as a container)

type GlassSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function GlassSection({id,children,className = "",}: GlassSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div
        className={`
          w-full max-w-7xl
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-[0_0_80px_rgba(255,255,255,0.05)]
          p-10 md:p-16
          ${className}
        `}
      >
        {children}
      </div>
    </section>
  );
}