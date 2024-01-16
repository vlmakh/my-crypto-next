// import { Metadata } from "next";
import Image from "next/image";
import { fetchCoinItem } from "@/utils/fetchCoinList";

type Props = {
  params: {
    id: string;
  };
};

// async function generateMetadata({
//   params: { id },
// }: Props): Promise<Metadata> {
//   const product = await getData(id);

//   return { title: product.title };
// }

export default async function CoinPage({ params: { id } }: Props) {
  const coin = await fetchCoinItem(id);

  return (
    <div>
      <Image src={coin.icon} alt={coin.id} width={48} height={48} />
      <div>{coin.name}</div>
    </div>
  );
}
