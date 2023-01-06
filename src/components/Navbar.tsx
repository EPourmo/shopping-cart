import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingSvg from "./ShoppingSvg";
export default function NavBar() {
  const { openCart, closeCart, cartQuantity } = useShoppingCart();
  return (
    <div className="bg-white shadow-sm sticky">
      <div className="flex items-center text-2xl p-4">
        <nav className="mr-auto">
          <Link to={"/"} className="mr-6">
            Home
          </Link>
          <Link to={"/store"} className="mr-6">
            Store
          </Link>
          <Link to={"/about"}>About</Link>
        </nav>
        {cartQuantity > 0 && (
          <button
            className="bg-sky-600 p-4 rounded-full hover:bg-sky-800 relative"
            onClick={openCart}
          >
            {<ShoppingSvg />}
            <div className="absolute bg-red-600 text-white rounded-full p-1 h-6 w-6 text-base flex items-center justify-center right-0 ">
              {cartQuantity}
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
