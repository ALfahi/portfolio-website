export type TimelineItem = {
    title: string;
    date: string;
    description: string;
    experienceType?: "work" | "volunteer" | "education";
};