import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full px-8 py-4 backdrop-blur-md bg-black/60 shadow-md border-b-2 border-blue-600 relative z-20">
      <div className="flex justify-start items-center">
        <Image
          src="/akiassc25logo.png"
          alt="Akiassc Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="flex-1"></div> {/* Spacer to push logo to left */}
    </header>
  );
}
