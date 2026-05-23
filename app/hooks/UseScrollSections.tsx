"use client";
import { useEffect, useState } from "react";

// a hook which determines which setion i currently active, and from which direction we are scrolling from

export function useScrollSections(sectionIds: readonly string[]) {
  const [active, setActive] = useState(sectionIds[0]);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    let lastY = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const y = window.scrollY;
          setDirection(y > lastY ? 1 : -1);
          lastY = y;

          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return { active, direction };
}