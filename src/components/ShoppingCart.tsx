import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart } = useShoppingCart();
  return (
    <>
      {isOpen && (
        <button
          className="flex text-4xl text-black items-center cursor-pointer fixed right-10 top-3 z-50 m-0"
          onClick={closeCart}
        >
          x
        </button>
      )}
      <div
        className={`fixed w-3/5 top-0 h-full right-0 z-10 bg-slate-50 translate-x-10 shadow-xl flex justify-start ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } p-4`}
      >
        <h2 className="text-4xl">Cart</h2>
      </div>
    </>
  );
}
