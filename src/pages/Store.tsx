import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";
export default function Store() {
  return (
    <>
      <h1>Store</h1>;
      {storeItems.map((item) => {
        return (
          <div key={item.id}>
            <StoreItem {...item} />;
          </div>
        );
      })}
    </>
  );
}
