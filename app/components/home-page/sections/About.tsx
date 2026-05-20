import GlassSection from "../../UI/GlassSection";

export default function About(){
    return(
        <GlassSection id="about">
            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* IMAGE */}
                <div className="flex justify-center md:justify-start">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <img
                    src="/LinkedIn-pfp.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    />
                </div>
                </div>

                {/* TEXT */}
                <div className="space-y-8">

                <h2 className="text-5xl font-semibold">
                    About Me
                </h2>

                <p className="text-xl text-neutral-300 leading-relaxed">
                    I am an aspiring software engineer who enjoys building systems,
                    solving problems, and turning ideas into real-world applications.
                </p>

                <p className="text-xl text-neutral-400 leading-relaxed">
                    I focus on full-stack development, clean UI design, and improving
                    through hands-on engineering experience.
                </p>

                <p className="text-sm text-neutral-500">
                    Currently focused on{" "}
                    <span className="text-blue-400">
                    React • Next.js • System Design
                    </span>
                </p>

                </div>

            </div>
        </GlassSection>
    )
}