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

function normalizeDestination(value: string) {
  const countryAliases: Record<string, string> = {
    croatia: "croacia",
    thailand: "tailandia",
  };

  return value
    .trim()
    .toLocaleLowerCase()
    .replace(/\b(croatia|thailand)\b/g, (country) => countryAliases[country]);
}

export default function useExperiences({
  search,
  category,
  destination,
}: ExperienceFilters): Experience[] {
  const titlePattern = new RegExp(escapeRegExp(search.trim()), "i");
  const normalizedDestination = normalizeDestination(destination);

  return experiences.filter((experience) => {
    const matchesSearch = titlePattern.test(experience.title);
    const matchesCategory =
      !category || experience.category.toLowerCase() === category.trim().toLowerCase();
    const matchesDestination =
      !normalizedDestination ||
      experience.destination
        .split(",")
        .some((part) => normalizeDestination(part).includes(normalizedDestination));

    return matchesSearch && matchesCategory && matchesDestination;
  });
}