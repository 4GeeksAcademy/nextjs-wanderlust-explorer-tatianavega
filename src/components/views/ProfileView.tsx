import type { FavoritesProps } from "@/components/AppShell";

export default function ProfileView({ favoriteIds }: FavoritesProps) {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">Perfil</h1>
      <p>Favoritos: {favoriteIds.length}</p>
    </section>
  );
}