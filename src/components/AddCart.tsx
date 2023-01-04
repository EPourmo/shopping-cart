import { useShoppingCart } from "../context/ShoppingCartContext";

type quantityProps = {
  id: number;
  quantity: number;
};

export default function AddCart({ id, quantity }: quantityProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex items-center gap-2">
        <button
          className="bg-sky-600 h-10 w-10 rounded-md text-white"
          onClick={() => decreaseCartQuantity(id)}
        >
          -
        </button>
        <div>
          <span className="text-2xl">{quantity}</span> in cart
        </div>
        <button
          className="bg-sky-600 h-10 w-10 rounded-md text-white"
          onClick={() => increaseCartQuantity(id)}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="text-sm bg-red-600 rounded-md p-2 text-white"
          onClick={() => removeFromCart(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
