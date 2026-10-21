import type { FavoritesProps } from "@/components/AppShell";
import ExperienceCard from "@/components/ExperienceCard";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import { experiences } from "@/data/experiences";

export default function ExperiencesView({
  favoriteIds,
  onToggleFavorite,
}: FavoritesProps) {
  const destinations = [...new Set(experiences.map(({ destination }) => destination))].sort();

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Experiencias</h1>
      <div className="space-y-4">
        <SearchBar />
        <FilterBar destinations={destinations} />
      </div>
      {experiences.length === 0 ? (
        <p>No se encontraron resultados</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={favoriteIds.includes(experience.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}