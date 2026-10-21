import Image from "next/image";
import Link from "next/link";

export default function HomeView() {
  return (
    <section className="relative isolate flex min-h-[min(680px,calc(100svh-8rem))] items-end overflow-hidden rounded-xl bg-neutral-950 text-white">
      <Image
        src="https://picsum.photos/seed/1/1920/1200"
        alt="Costa croata bañada por la luz del atardecer"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
      <div className="max-w-3xl space-y-5 px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
          Wanderlust Explorer · Viajes con sentido
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-6xl">
          El mundo se vive mejor de cerca.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-white/85">
          Descubre experiencias locales que convierten cada destino en una
          historia para recordar.
        </p>
        <Link
          href="/experiences"
          className="inline-flex min-h-12 items-center rounded-md bg-amber-300 px-6 font-semibold text-neutral-950 transition-colors hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Descubrir experiencias
        </Link>
      </div>
    </section>
  );
}