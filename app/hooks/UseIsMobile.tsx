"use client";

import { useEffect, useState } from "react";
// a hook which returns whether or not the user is on mobile, based on a provided breakpoint (default 768px)
// TODO: exend to other devices later
export function useIsMobile(breakpoint = 768): {isMobile: boolean} {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return {isMobile};
}