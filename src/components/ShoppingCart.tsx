import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import StoreItem from "./StoreItem";
import storeItems from "../data/items.json";
import formatCurrency from "../utilities/formatCurrency";

type ShoppingCartProps = {
  isOpen: boolean;
};

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div
      className={`fixed top-0 max-w-md h-full right-0 z-50 bg-slate-50 shadow-xl ease-in-out duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } p-4`}
    >
      {isOpen && (
        <button
          className="text-4xl text-black items-center cursor-pointer fixed right-10 top-3 z-50 m-0"
          onClick={closeCart}
        >
          x
        </button>
      )}
      <div>
        <h2 className="text-4xl mb-6">Cart</h2>
        <div className="flex gap-4 flex-col mb-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className=" font-extrabold text-2xl text-right">
          {`Total: ` +
            formatCurrency(
              cartItems.reduce((total, CartItem) => {
                const item = storeItems.find((i) => i.id === CartItem.id);
                return total + (item?.price || 0) * CartItem.quantity;
              }, 0)
            )}
        </div>
      </div>
    </div>
  );
}
