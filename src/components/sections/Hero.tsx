import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid w-full grid-cols-1 gap-0 md:grid-cols-2 md:gap-0">
          <div className="order-1 flex justify-center md:order-2 md:items-end">
            <div className="relative w-[clamp(200px,60vw,520px)] aspect-3/4">
              <Image
                src="/images/profile.webp"
                alt="Foto representativa de Adrian Santos"
                fill
                priority
                className="object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.45)]"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 75%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 75%, transparent 100%)",
                }}
              />
            </div>
          </div>

          <div className="order-2 flex flex-col justify-center text-center md:order-1 md:text-left">
            <p className="mb-3 uppercase tracking-widest text-blue-400 text-[clamp(0.9rem,1.5vw,1.2rem)]">
              Hola, soy
            </p>

            <h1 className="font-bold leading-tight text-white text-[clamp(2rem,6vw,4rem)]">
              Adrian Santos
            </h1>

            <h2 className="mt-3 text-blue-400 text-[clamp(1.25rem,4vw,2rem)]">
              Desarrollador de Software
            </h2>

            <p className="mt-4 mx-auto max-w-xl leading-relaxed text-slate-400 text-[clamp(1rem,3.5vw,1.15rem)] md:mx-0">
              Diseño y construyo soluciones digitales modernas, escalables y
              centradas en el usuario, combinando diseño, rendimiento y buenas
              prácticas de desarrollo.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="#proyects"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Ver proyectos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>

              <a
                href="/cv/CV - Jose Adrian Santos Sanchez.pdf"
                target="_blank"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-blue-500/40 px-6 py-3 text-sm font-semibold text-blue-400 transition hover:bg-blue-500/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
