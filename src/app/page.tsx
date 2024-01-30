import Image from "next/image";
import { Container } from "@/components/Container";
import { SearchCoinsForm } from "@/components/ui/SearchCoinsForm";

export default async function HomePage() {
  

  return (
    <div className="text-center mx-auto max-w-7xl">
      <Image
        src="/logo512.webp"
        alt=""
        width={300}
        height={300}
        className="mx-auto mt-12"
        priority
      />

      <SearchCoinsForm />
    </div>
  );
}
