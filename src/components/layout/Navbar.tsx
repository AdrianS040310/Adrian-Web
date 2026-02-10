import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Image
          src="/images/Logo AdrianDev - Fondo Oscuro.webp"
          alt="Logo de Adrian Santos"
          priority
          width={230}
          height={100}
          className="h-auto w-35 sm:w-45 md:w-55"
        />

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#home"
            className="text-slate-300 hover:text-blue-400 transition"
          >
            Inicio
          </Link>
          <Link
            href="#about"
            className="text-slate-300 hover:text-blue-400 transition"
          >
            Sobre mí
          </Link>
          <Link
            href="#proyects"
            className="text-slate-300 hover:text-blue-400 transition"
          >
            Proyectos
          </Link>
          <Link
            href="#contact"
            className="text-slate-300 hover:text-blue-400 transition"
          >
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
}
