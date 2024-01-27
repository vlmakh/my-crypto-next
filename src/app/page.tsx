import Image from "next/image";

export default async function HomePage() {
  return (
    <div className="text-center pt-5">
      <Image
        src="/logo512.webp"
        alt=""
        width={300}
        height={300}
        className="mx-auto"
        priority
      />
    </div>
  );
}
