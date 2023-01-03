import formatCurrency from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <div className="h-80 rounded-md bg-white shadow-lg overflow-hidden">
      <img src={imgUrl} alt={name} className="h-52 object-cover w-full" />
      <div className="flex flex-col p-6">
        <div className="flex flex-row items-baseline justify-between mb-4">
          <h2 className="text-2xl">{name}</h2>
          <p className="text-xl text-gray-400">{formatCurrency(price)}</p>
        </div>
      </div>
    </div>
  );
}
