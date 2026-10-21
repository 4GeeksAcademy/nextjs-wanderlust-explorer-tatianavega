"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { FavoritesProps } from "@/components/AppShell";
import { experiences } from "@/data/experiences";

interface ExperienceDetailViewProps extends FavoritesProps {
  id: string;
}

export default function ExperienceDetailView({
  id,
  favoriteIds,
  onToggleFavorite,
}: ExperienceDetailViewProps) {
  const experience = experiences.find(({ id: experienceId }) => experienceId === Number(id));
  const pageTitle = experience
    ? `${experience.title} | Wanderlust Explorer`
    : "Experiencia no encontrada | Wanderlust Explorer";

  useEffect(() => {
    document.title = pageTitle;
    return () => {
      document.title = "Wanderlust Explorer";
    };
  }, [pageTitle]);

  if (!experience) {
    return (
      <section className="space-y-4 py-12">
        <h1 className="text-3xl font-semibold">No encontramos esta experiencia</h1>
        <p className="text-foreground/70">
          Puede que el enlace ya no esté disponible.
        </p>
        <Link
          href="/experiences"
          className="inline-flex min-h-11 items-center rounded-md bg-foreground px-5 font-medium text-background hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Volver a experiencias
        </Link>
      </section>
    );
  }

  const isFavorite = favoriteIds.includes(experience.id);

  return (
    <article className="mx-auto max-w-5xl space-y-8">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={experience.imageUrl.replace("/600/400", "/1600/900")}
          alt={experience.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="space-y-5">
          <p className="font-medium text-foreground/65">
            {experience.category} · {experience.destination}
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            {experience.title}
          </h1>
          <p className="text-lg leading-relaxed text-foreground/75">
            {experience.description}
          </p>
        </div>
        <aside className="h-fit space-y-5 rounded-lg border border-foreground/15 p-5">
          <p className="text-2xl font-semibold">
            {new Intl.NumberFormat("es-ES", {
              style: "currency",
              currency: "EUR",
              maximumFractionDigits: 0,
            }).format(experience.price)}
            <span className="ml-1 text-sm font-normal text-foreground/65">
              / persona
            </span>
          </p>
          <p aria-label={`Valoración ${experience.rating} de 5`}>
            <span className="text-amber-600" aria-hidden="true">★</span>{" "}
            {experience.rating.toFixed(1)} de 5
          </p>
          <button
            type="button"
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(experience.id)}
            className="flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-foreground/20 px-4 font-medium hover:bg-foreground/5 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span className="text-xl text-rose-600" aria-hidden="true">
              {isFavorite ? "♥" : "♡"}
            </span>
            {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          </button>
        </aside>
      </div>
    </article>
  );
}