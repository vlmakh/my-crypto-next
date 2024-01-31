import Image from "next/image";
import { SearchCoinsForm } from "@/components/ui/SearchCoinsForm";

export default async function HomePage() {
  

  return (
    <div className="text-center mx-auto max-w-7xl">
      <Image
        src="/logo512.webp"
        alt=""
        width={100}
        height={100}
        className="mx-auto mt-6"
        priority
      />

      <SearchCoinsForm />
    </div>
  );
}
