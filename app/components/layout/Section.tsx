// generic section component to provide consistent padding and max width 

type SectionProps = {
    id?: string;
    children: React.ReactNode;
    className?: string;
}
export default function Section({id, children,className = "",}: SectionProps) {
    return (
      <section
        id={id}
        className={`
          relative
          w-full
          px-6 md:px-24
          py-28 md:py-40
          ${className}
        `}
      >
        {children}
      </section>
    );
  }