export const HOME_PAGE_SECTIONS = {hero: "hero",about: "about",skills: "skills",career: "career", contact: "contact",} as const;
// array version in case we need order + iteration
export const HOME_PAGE_SECTIONS_ARRAY = [HOME_PAGE_SECTIONS.hero,HOME_PAGE_SECTIONS.about,HOME_PAGE_SECTIONS.skills,
  HOME_PAGE_SECTIONS.career,HOME_PAGE_SECTIONS.contact,] as const;