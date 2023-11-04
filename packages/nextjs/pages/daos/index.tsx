import Image from "next/image";
import { NextPage } from "next";

const daos = [
  {
    id: "1",
    name: "MetaCartel Ventures",
    imageUrl: "https://pbs.twimg.com/profile_images/1445734300582875136/hjFxvB-Q_400x400.jpg",
    backgroundUrl: "https://pbs.twimg.com/profile_images/1445734300582875136/hjFxvB-Q_400x400.jpg",
    description:
      "MetaCartel Ventures is a DAO that invests in early stage projects that are building the future of web3.",
  },
  {
    id: "2",
    name: "CityDAO",
    imageUrl: "https://pbs.twimg.com/profile_images/1445734300582875136/hjFxvB-Q_400x400.jpg",
    backgroundUrl: "https://pbs.twimg.com/profile_images/1445734300582875136/hjFxvB-Q_400x400.jpg",
    description: "CityDAO is a DAO that invests in early stage projects that are building the future of web3.",
  },
  {
    id: "3",
    name: "SafeDAO",
    imageUrl: "https://pbs.twimg.com/profile_images/1445734300582875136/hjFxvB-Q_400x400.jpg",
    backgroundUrl: "https://pbs.twimg.com/profile_images/1445734300582875136/hjFxvB-Q_400x400.jpg",
    description: "SafeDAO is a DAO that invests in early stage projects that are building the future of web3.",
  },
  {
    id: "4",
    name: "Near",
    imageUrl: "https://pbs.twimg.com/profile_images/1445734300582875136/hjFxvB-Q_400x400.jpg",
    backgroundUrl: "https://pbs.twimg.com/profile_images/1445734300582875136/hjFxvB-Q_400x400.jpg",
    description: "Near is a DAO that invests in early stage projects that are building the future of web3.",
  },
];

const DaosPage: NextPage = () => {
  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
        {daos.map(dao => (
          <li key={dao.id} className="overflow-hidden rounded-xl border border-gray-200">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
              <Image
                src={dao.imageUrl}
                alt={dao.name}
                className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                width={48}
                height={48}
              />
              <div className="text-sm font-medium leading-6 text-gray-900">{dao.name}</div>
            </div>
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Last invoice</dt>
                <dd className="text-gray-700"></dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Amount</dt>
                <dd className="flex items-start gap-x-2"></dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaosPage;