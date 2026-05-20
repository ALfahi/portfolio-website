import GlassSection from "../../UI/GlassSection";

export default function Skills(){
    return(
        <GlassSection id="skills">
        
            <h2 className="text-5xl font-semibold mb-14">
                Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xl">

                {[
                "Python",
                "Java",
                "TypeScript",
                "React",
                "Next.js",
                "SQL",
                "Tailwind",
                "Git",
                ].map((skill) => (
                <div
                    key={skill}
                    className="
                    text-neutral-300
                    hover:text-blue-400
                    transition
                    "
                >
                    {skill}
                </div>
                ))}

            </div>

        </GlassSection>
        
    )
}