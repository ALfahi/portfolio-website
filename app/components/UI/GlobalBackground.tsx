// soft and subtle animated bacground to be used throughout entire site


export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10">

        {/* soft glow field */}
        <div className="absolute top-[-20%] left-1/2 w-[800px] h-[800px]
          bg-blue-500/10 blur-[160px] rounded-full animate-pulse" />

        {/* second subtle ambient glow */}
        <div className="absolute bottom-[-20%] right-1/3 w-[600px] h-[600px]
          bg-purple-500/5 blur-[140px] rounded-full" />

        {/* very subtle moving noise layer */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:40px_40px] animate-[pulse_12s_ease-in-out_infinite]" />
      </div>
    )
}