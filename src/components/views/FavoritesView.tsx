import type { FavoritesProps } from "@/components/AppShell";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";

export default function FavoritesView({
  favoriteIds,
  onToggleFavorite,
}: FavoritesProps) {
  const favoriteExperiences = experiences.filter(({ id }) => favoriteIds.includes(id));

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Favoritos</h1>
      {favoriteExperiences.length === 0 ? (
        <p>Todavía no tienes favoritos</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}