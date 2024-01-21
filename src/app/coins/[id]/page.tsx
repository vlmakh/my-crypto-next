import { Metadata } from "next";
import Image from "next/image";
import { fetchCoinItem } from "@/utils/fetchCoinList";
import { formatPrice } from "@/utils/formatPrice";
import { CoinChart } from "@/components/CoinChart";
import { ICoin } from "@/types";
import { BackLink } from "@/components/ui/BackLink";
import { AddRemoveButton } from "@/components/ui/AddRemoveButton";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/configs/firebase";
import { queryWatchList } from "@/data/queryWatchList";
// import { getServerSession } from "next-auth";
// import { authConfig } from "@/configs/auth";


type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const coin = await fetchCoinItem(id);

  return {
    title: coin.name + " | My Crypto",
  };
}

export default async function CoinPage({ params: { id } }: Props) {
  const coin: ICoin = await fetchCoinItem(id);
  // const session = await getServerSession(authConfig);

  const uid = "HhdJFQ6innD3Q4uPhgQL";
  // const coinRef = doc(db, "watchlist", uid);
  // const docSnap = await getDoc(coinRef);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // docSnap.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  return (
    <div className="text-center pt-5 sm:px-4 lg:w-1/2 mx-auto lg:px-0">
      <div className="flex justify-between">
        <BackLink />

        <div className="flex gap-4">
          <Image
            src={coin.icon}
            alt={coin.id}
            width={60}
            height={60}
            priority
          />
          <div>
            <h2 className="font-bold text-3xl text-left">{coin.symbol}</h2>
            <p>{coin.name}</p>
          </div>
        </div>

       <AddRemoveButton
          coinId={coin.id}
          uid={uid}
          watchlist={queryWatchList}
        />
      </div>

      <div className="flex justify-between items-center py-5">
        <p className="font-bold text-2xl">{formatPrice(coin.price)}$</p>

        <div className="text-right">
          <p>{coin.priceChange1h.toFixed(1)}% 1H</p>
          <p>{coin.priceChange1d.toFixed(1)}% 1D</p>
          <p>{coin.priceChange1w.toFixed(1)}% 1W</p>
        </div>
      </div>

      <CoinChart id={coin.id} />

      <div className="pt-5">
        <p className="border-b-2 flex justify-between py-2">
          <span className="font-bold">Rank</span>
          <span>{coin.rank}</span>
        </p>

        <p className="border-b-2 flex justify-between py-2">
          <span className="font-bold">Market cap</span>
          <span>{Math.round(coin.marketCap).toLocaleString()} $</span>
        </p>
        <p className="border-b-2 flex justify-between py-2">
          <span className="font-bold">Volume 24h</span>
          <span>{Math.round(coin.volume).toLocaleString()} $</span>
        </p>
        <p className="flex justify-between py-2">
          <span className="font-bold">Supply</span>
          <span>{coin.totalSupply.toLocaleString()}</span>
        </p>
        <p className="border-b-2 flex justify-between pb-2">
          <span>Circulating</span>
          <span>{coin.availableSupply.toLocaleString()}</span>
        </p>
        <p className="border-b-2 flex justify-between py-2">
          <span className="font-bold">homepage</span>
          <a
            href={coin.websiteUrl}
            target="_blank"
            className="hover:text-orange-500 transition-colors"
          >
            {coin.websiteUrl}
          </a>
        </p>
      </div>
    </div>
  );
}
