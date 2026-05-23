"use client";
import { useState } from "react";


// hook to handle pagination and routing, also handles directions for animations
export function usePagination() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [pendingTarget, setPendingTarget] = useState<string | null>(null);

  // function to go to a target id and scroll to it, even if target is in another page
  function goToPage(next: number, targetId?: string) {
    // SAME PAGE
    if (next === page) {
      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // DIFFERENT PAGE
    setDirection(next > page ? 1 : -1);
    setPendingTarget(targetId ?? null);
    setPage(next);
  }

  // function to scroll to the target once animation is completed
  function handleAnimationComplete() {
    if (pendingTarget) {
      document.getElementById(pendingTarget)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setPendingTarget(null);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return {page,direction,goToPage,handleAnimationComplete,};
}