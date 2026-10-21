import type { FavoritesProps } from "@/components/AppShell";

interface ExperienceDetailViewProps extends FavoritesProps {
  id: string;
}

export default function ExperienceDetailView({
  id,
  favoriteIds,
}: ExperienceDetailViewProps) {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">Experiencia {id}</h1>
      <p>Favoritos: {favoriteIds.length}</p>
    </section>
  );
}