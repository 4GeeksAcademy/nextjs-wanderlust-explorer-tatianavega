import type { Experience } from "@/types/experience";

interface FilterBarProps {
  destinations: string[];
}

const categories: Experience["category"][] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

export default function FilterBar({ destinations }: FilterBarProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="experience-category" className="mb-1.5 block text-sm font-medium">
          Categoría
        </label>
        <select
          id="experience-category"
          defaultValue=""
          className="min-h-11 w-full rounded-md border border-foreground/25 bg-background px-3 py-2 text-sm outline-offset-2 focus-visible:outline-2"
        >
          <option value="">Todas</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="experience-destination" className="mb-1.5 block text-sm font-medium">
          Destino
        </label>
        <select
          id="experience-destination"
          defaultValue=""
          className="min-h-11 w-full rounded-md border border-foreground/25 bg-background px-3 py-2 text-sm outline-offset-2 focus-visible:outline-2"
        >
          <option value="">Todos los destinos</option>
          {destinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}