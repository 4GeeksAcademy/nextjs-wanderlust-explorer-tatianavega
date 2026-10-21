interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="w-full">
      <label htmlFor="experience-search" className="mb-1.5 block text-sm font-medium">
        Buscar experiencias
      </label>
      <input
        id="experience-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="¿Qué te gustaría hacer?"
        className="min-h-11 w-full rounded-md border border-foreground/25 bg-background px-3 py-2 text-sm outline-offset-2 placeholder:text-foreground/50 focus-visible:outline-2"
      />
    </div>
  );
}