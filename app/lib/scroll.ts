// function to scroll to a specific section of a page smoohtly
export function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// functiont to get next section for home page
export function getNextSection(current: string, sections: string[]){
  const index = sections.indexOf(current);
  return sections[index + 1] || null;
};

// function to get previous section for home page
export function getPrevSection(current: string, sections: string[]){
  const index = sections.indexOf(current);
  return sections[index - 1] || null;
};