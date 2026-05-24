// footer component which contains contact information and links to social media profiles
import ContactItem from "../UI/ContactItem";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-neutral-800 mt-20 px-6 py-10 backdrop-blur-lg"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

        {/* LEFT */}
        <div>
          <h2 className="text-white text-body-large font-semibold tracking-tight">
            Contact
          </h2>

          <p className="text-neutral-500 mt-1 text-body">
            Open to projects, internships, and collaborations.
          </p>
        </div>

        {/* RIGHT */}
        <nav className="flex flex-col gap-4">
          <ContactItem
            label="Email"
            value="feha.tasnim27@gmail.com"
            href="mailto:feha.tasnim27@gmail.com"
            icon={<FiMail size={24} />}
          />

          <ContactItem
            label="Phone"
            value="+44 7767 795763"
            href="tel:+447767795763"
            icon={<FiPhone size={24} />}
          />

          <ContactItem
            label="LinkedIn"
            value="fahisabab-al"
            href="https://linkedin.com/in/fahisabab-al"
            icon={<FaLinkedin size={24} />}
          />

          <ContactItem
            label="GitHub"
            value="ALfahi"
            href="https://github.com/ALfahi"
            icon={<FaGithub size={24} />}
          />
        </nav>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-neutral-800 flex items-center justify-center">
        <p className="text-xs md:text-sm text-neutral-500">
          © 2026 Fahi Sabab Al. All rights reserved.
        </p>
      </div>
    </footer>
  );
}