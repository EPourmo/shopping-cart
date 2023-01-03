import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";
export default function Store() {
  return (
    <>
      <h1 className="text-4xl m-8">Store</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-8">
        {storeItems.map((item) => {
          return (
            <div key={item.id}>
              <StoreItem {...item} />
            </div>
          );
        })}
      </div>
    </>
  );
}
