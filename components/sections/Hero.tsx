import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-5rem)] w-full items-center px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] opacity-50">
            {profile.role}
          </p>

          <h1 className="mt-6 text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
        </div>
      </div>
    </section>
  );
}