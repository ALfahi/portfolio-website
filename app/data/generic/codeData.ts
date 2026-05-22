// this file contains code snippets, token colours, and animation lane data

// VS Code Dark+ token colors
export const TOKEN = {
    keyword:  "#569CD6",  // blue  — const, async, function, type
    fn:       "#DCDCAA",  // yellow — function names
    string:   "#CE9178",  // orange — string values
    type:     "#4EC9B0",  // teal  — types
    operator: "#D4D4D4",  // white — arrows, dots
    comment:  "#6A9955",  // green — // comments
    punct:    "#808080",  // gray  — brackets, parens
  };
  
  export type Token = { text: string; color: string };
  
  export const snippets: Token[][] = [
    [
      { text: "const ",      color: TOKEN.keyword },
      { text: "api",         color: TOKEN.operator },
      { text: " = ",         color: TOKEN.punct },
      { text: "await ",      color: TOKEN.keyword },
      { text: "build",       color: TOKEN.fn },
      { text: "()",          color: TOKEN.punct },
    ],
    [
      { text: "// full-stack engineer", color: TOKEN.comment },
    ],
    [
      { text: "useEffect",   color: TOKEN.fn },
      { text: "(() => ",     color: TOKEN.punct },
      { text: "sync",        color: TOKEN.fn },
      { text: "(), [])",     color: TOKEN.punct },
    ],
    [
      { text: "type ",       color: TOKEN.keyword },
      { text: "Stack",       color: TOKEN.type },
      { text: " = ",         color: TOKEN.punct },
      { text: "React",       color: TOKEN.string },
      { text: " | ",         color: TOKEN.operator },
      { text: "Next.js",     color: TOKEN.string },
    ],
    [
      { text: "async ",      color: TOKEN.keyword },
      { text: "function ",   color: TOKEN.keyword },
      { text: "ship",        color: TOKEN.fn },
      { text: "() {",        color: TOKEN.punct },
    ],
    [
      { text: "// clean → fast → scalable", color: TOKEN.comment },
    ],
    [
      { text: "interface ",  color: TOKEN.keyword },
      { text: "Engineer",    color: TOKEN.type },
      { text: " {",          color: TOKEN.punct },
    ],
    [
      { text: "return ",     color: TOKEN.keyword },
      { text: "<",           color: TOKEN.punct },
      { text: "System",      color: TOKEN.type },
      { text: " intent",     color: TOKEN.operator },
      { text: '="',          color: TOKEN.punct },
      { text: "high",        color: TOKEN.string },
      { text: '" />',        color: TOKEN.punct },
    ],
    [
      { text: "arch",        color: TOKEN.fn },
      { text: ".scale(",     color: TOKEN.punct },
      { text: "∞",           color: TOKEN.string },
      { text: ")",           color: TOKEN.punct },
    ],
  ];
  

export const LANES = [
    { top: "8%",  duration: 28, delay: 0    },
    { top: "19%", duration: 38, delay: -14  },
    { top: "30%", duration: 24, delay: -6   },
    { top: "42%", duration: 42, delay: -20  },
    { top: "55%", duration: 32, delay: -4   },
    { top: "66%", duration: 26, delay: -18  },
    { top: "76%", duration: 44, delay: -10  },
    { top: "86%", duration: 30, delay: -22  },
    { top: "93%", duration: 36, delay: -8   },
  ];