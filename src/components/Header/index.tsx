import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full px-8 py-4 bg-white/10 backdrop-blur-md rounded-lg shadow-md">
      <nav className="flex gap-8">
        <a href="#" className="text-white font-bold hover:underline">
          HOME
        </a>
        <a href="#" className="text-white font-bold hover:underline">
          EVENTS
        </a>
        <a href="#" className="text-white font-bold hover:underline">
          ABOUT
        </a>
      </nav>
      <div className="flex justify-center items-center">
        <Image
          src="/akiassc25.png"
          alt="Akiassc Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <nav className="flex gap-8">
        <a href="#" className="text-white font-bold hover:underline">
          PRO SHOWS
        </a>
        <a href="#" className="text-white font-bold hover:underline">
          BROCHURE
        </a>
        <a href="#" className="text-white font-bold hover:underline">
          TEAMS
        </a>
      </nav>
    </header>
  );
}
