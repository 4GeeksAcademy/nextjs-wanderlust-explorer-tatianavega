import { experiences } from "@/data/experiences";
import type { Experience } from "@/types/experience";

interface ExperienceFilters {
  search: string;
  category: string;
  destination: string;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function useExperiences({
  search,
  category,
  destination,
}: ExperienceFilters): Experience[] {
  const titlePattern = new RegExp(escapeRegExp(search.trim()), "i");
  const normalizedDestination = destination.trim().toLocaleLowerCase();

  return experiences.filter((experience) => {
    const matchesSearch = titlePattern.test(experience.title);
    const matchesCategory = !category || experience.category === category;
    const matchesDestination =
      !normalizedDestination ||
      experience.destination
        .split(",")
        .some((part) => part.trim().toLocaleLowerCase().includes(normalizedDestination));

    return matchesSearch && matchesCategory && matchesDestination;
  });
}