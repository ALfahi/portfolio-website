import { ReactNode } from "react";
// simple contact item in the footer which takes in a label, value, href and an icon as props and renders a link with the icon and value
type ContactItemProps = {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
};

export default function ContactItem({label,value,href,icon,}: ContactItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 text-nav text-neutral-300 hover:text-white transition-all"
    >
      <div className="text-neutral-500 group-hover:text-blue-400 transition-colors">
        {icon}
      </div>

      <span className="font-medium text-neutral-500">
        {label}:
      </span>

      <span className="underline decoration-neutral-700 group-hover:decoration-blue-400">
        {value}
      </span>
    </a>
  );
}