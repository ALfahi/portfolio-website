"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/app/data/sections/projects";
import ProjectList from "../projectList/ProjectList";
import PaginationControls from "@/app/components/pagination/PaginationControls";
import { getVisiblePages, paginateArray } from "@/app/utils/pagination";
// component that splits the project into different pages and also handles animations

export const PAGE_SIZE = 3;// TODO: rename into project_page_size if we use pagination elsewhere for clarity

type Props = {
  page: number;
  direction: number;
  goToPage: (page: number, targetId?: string) => void;
  onAnimationComplete: () => void;// callback when transition ends
};

export default function ProjectSection({page,direction, goToPage,onAnimationComplete,}: Props) {
  const pages = useMemo(
    () => paginateArray(projects, PAGE_SIZE), []
  );
  
  const currentPage = pages[page] || [];
  
  const visiblePages = useMemo(
    () => getVisiblePages(page, pages.length, 5), [page, pages.length]
  );

  return (
    <section className="max-w-5xl mx-auto px-6">

      {/* animated project list */}
      <AnimatePresence mode="wait">
      <motion.div
          key={page}
          initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={onAnimationComplete}
        >
          <ProjectList projects={currentPage} />
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <PaginationControls
        page={page}
        totalPages={pages.length}
        visiblePages={visiblePages}
        goToPage={goToPage}
      />

    </section>
  );
}