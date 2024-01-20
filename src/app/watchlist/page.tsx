import { WatchList } from "@/components/WatchList";
import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";
import { queryWatchList } from "@/data/queryWatchList";

export default async function WatchlistPage() {
  const session = await getServerSession(authConfig);

  return (
    <>
      <h1 className="text-center py-5">{session?.user?.name}</h1>

      <WatchList queryWatchList={queryWatchList} />
    </>
  );
}
