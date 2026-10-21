"use client";

import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export default function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-foreground/15 bg-background">
      <div className="relative aspect-[3/2]">
        <Link
          href={`/experiences/${experience.id}`}
          aria-label={`Ver ${experience.title}`}
          className="absolute inset-0"
        >
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </Link>
        <button
          type="button"
          aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(experience.id)}
          className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-white text-2xl text-rose-600 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
        </button>
      </div>
      <div className="space-y-2 p-4">
        <p className="text-sm font-medium text-foreground/65">
          {experience.category} · {experience.destination}
        </p>
        <h2 className="text-lg font-semibold leading-snug">
          <Link
            href={`/experiences/${experience.id}`}
            className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {experience.title}
          </Link>
        </h2>
        <div className="flex items-center justify-between gap-3 pt-1 text-sm">
          <span className="font-semibold">
            {new Intl.NumberFormat("es-ES", {
              style: "currency",
              currency: "EUR",
              maximumFractionDigits: 0,
            }).format(experience.price)}
            <span className="font-normal text-foreground/65"> / persona</span>
          </span>
          <span aria-label={`Valoración ${experience.rating} de 5`}>
            <span className="text-amber-600" aria-hidden="true">★</span>{" "}
            {experience.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </article>
  );
}