import type { Experience } from "@/types/experience";

interface FilterBarProps {
  destinations: string[];
  category: string;
  destination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

const categories: Experience["category"][] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

export default function FilterBar({
  destinations,
  category,
  destination,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="experience-category" className="mb-1.5 block text-sm font-medium">
          Categoría
        </label>
        <select
          id="experience-category"
          value={
            categories.find((option) => option.toLowerCase() === category.trim().toLowerCase()) ?? category
          }
          onChange={(event) => onCategoryChange(event.target.value)}
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
        <input
          id="experience-destination"
          type="search"
          list="experience-destinations"
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
          placeholder="Ciudad o país"
          className="min-h-11 w-full rounded-md border border-foreground/25 bg-background px-3 py-2 text-sm outline-offset-2 focus-visible:outline-2"
        />
        <datalist id="experience-destinations">
          {destinations.map((destination) => (
            <option key={destination} value={destination}>
            </option>
          ))}
        </datalist>
      </div>
    </div>
  );
}