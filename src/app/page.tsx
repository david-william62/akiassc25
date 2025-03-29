import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
    </div>
  );
}
