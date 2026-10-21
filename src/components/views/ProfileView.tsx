import Image from "next/image";
import type { FavoritesProps } from "@/components/AppShell";

export default function ProfileView({ favoriteIds }: FavoritesProps) {
  return (
    <section className="mx-auto max-w-3xl space-y-8">
      <h1 className="text-3xl font-bold">Mi perfil</h1>
      <div className="flex flex-col gap-6 border-y border-foreground/15 py-8 sm:flex-row sm:items-center">
        <div className="relative size-28 shrink-0 overflow-hidden rounded-full bg-neutral-100">
          <Image
            src="https://picsum.photos/seed/wanderlust-profile/224/224"
            alt="Retrato de Lucía Martínez"
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Lucía Martínez</h2>
          <p className="max-w-xl leading-relaxed text-foreground/70">
            Viajera curiosa, amante de los mercados locales y de encontrar
            historias fuera de las rutas habituales.
          </p>
        </div>
      </div>
      <p className="text-lg">
        <span className="font-semibold">{favoriteIds.length}</span>{" "}
        {favoriteIds.length === 1
          ? "experiencia guardada en favoritos"
          : "experiencias guardadas en favoritos"}
      </p>
    </section>
  );
}