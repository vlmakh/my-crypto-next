import Image from "next/image";
import { Container } from "@/components/Container";

export default async function HomePage() {
  return (
    <Container>
      <Image
        src="/logo512.webp"
        alt=""
        width={300}
        height={300}
        className="mx-auto mt-12"
        priority
      />
    </Container>
  );
}
