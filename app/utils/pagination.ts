// functions relating to pagination

// function to convert an array into pages given a page size
export function paginateArray<T>(items: T[], pageSize: number): T[][] {
    const pages: T[][] = [];
  
    for (let i = 0; i < items.length; i += pageSize) {
      pages.push(items.slice(i, i + pageSize));
    }
  
    return pages;
}


// function to check which page options for the buttons should be visible
export function getVisiblePages( currentPage: number, totalPages: number, maxVisible = 5): number[] {
    const half = Math.floor(maxVisible / 2);
  
    let start = Math.max(0, currentPage - half);
    let end = Math.min(totalPages, start + maxVisible);
  
    // adjust if we’re near the end
    if (end - start < maxVisible) {
      start = Math.max(0, end - maxVisible);
    }
  
    const pages: number[] = [];
  
    for (let i = start; i < end; i++) {
      pages.push(i);
    }
  
    return pages;
}