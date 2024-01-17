// import { Metadata } from "next";
import Image from "next/image";
import { fetchCoinItem, historicalChart } from "@/utils/fetchCoinList";
import { CoinChart } from "@/components/CoinChart";

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
    <div className="text-center pt-5">
      <Image src={coin.icon} alt={coin.id} width={48} height={48} className="mx-auto"/>
      <div>{coin.name}</div>

      {/* <CoinChart id={coin.id} /> */}
    </div>
  );
}
