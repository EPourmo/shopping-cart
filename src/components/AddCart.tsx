type quantityProps = {
  quantity: number;
};

export default function AddCart({ quantity }: quantityProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex items-center gap-2">
        <button className="bg-sky-600 h-10 w-10 rounded-md text-white">
          -
        </button>
        <div>
          <span className="text-2xl">{quantity}</span> in cart
        </div>
        <button className="bg-sky-600 h-10 w-10 rounded-md text-white">
          +
        </button>
      </div>
      <div>
        <button className="text-sm bg-red-600 rounded-md p-2 text-white">
          Remove
        </button>
      </div>
    </div>
  );
}
