"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import HomeView from "@/components/views/HomeView";
import ExperiencesView from "@/components/views/ExperiencesView";
import ExperienceDetailView from "@/components/views/ExperienceDetailView";
import FavoritesView from "@/components/views/FavoritesView";
import ProfileView from "@/components/views/ProfileView";

export interface FavoritesProps {
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
}

export default function AppShell() {
  const pathname = usePathname();
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  function toggleFavorite(id: number) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((favoriteId) => favoriteId !== id)
        : [...currentIds, id],
    );
  }

  const viewProps: FavoritesProps = {
    favoriteIds,
    onToggleFavorite: toggleFavorite,
  };
  const detailMatch = /^\/experiences\/([^/]+)$/.exec(pathname);
  let view;

  switch (pathname) {
    case "/":
      view = <HomeView {...viewProps} />;
      break;
    case "/experiences":
      view = <ExperiencesView {...viewProps} />;
      break;
    case "/favorites":
      view = <FavoritesView {...viewProps} />;
      break;
    case "/profile":
      view = <ProfileView {...viewProps} />;
      break;
    default:
      view = detailMatch ? (
        <ExperienceDetailView
          {...viewProps}
          id={decodeURIComponent(detailMatch[1])}
        />
      ) : (
        <h1 className="text-2xl font-semibold">Página no encontrada</h1>
      );
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 font-sans sm:px-6">
      {view}
    </main>
  );
}