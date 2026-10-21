"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useFilters() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateFilter(key: "search" | "category" | "destination", value: string) {
    const nextParams = new URLSearchParams(searchParams.toString());
    const trimmedValue = value.trim();

    if (trimmedValue) {
      nextParams.set(key, trimmedValue);
    } else {
      nextParams.delete(key);
    }

    const query = nextParams.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return {
    search: searchParams.get("search") ?? "",
    category: searchParams.get("category") ?? "",
    destination: searchParams.get("destination") ?? "",
    setSearch: (value: string) => updateFilter("search", value),
    setCategory: (value: string) => updateFilter("category", value),
    setDestination: (value: string) => updateFilter("destination", value),
  };
}