type Props = {
  open: boolean;
};

export default function ShoppingBagModal(props: Props) {
  return (
    <div
      className={`${
        props.open ? "" : "invisible -translate-y-10 opacity-0"
      } shadow-menuModal absolute right-0 top-11 z-[101] flex h-96 min-h-fit w-80 flex-col rounded-2xl bg-white p-6 opacity-100 transition `}
    >
      <div className=" font-poppins text-xl">Shopping Cart</div>
      <div className="my-4 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-peach/80">
        <div className="mr-4 border-b py-2">
          <div className="flex justify-between">
            <div>Brown T-shirt</div>
            <div className="flex text-lg">
              <button>-</button>
              <input
                type="text"
                className="mx-1 w-6 text-center text-base focus:outline-gray-200"
                value={1}
              />
              <button>+</button>
            </div>
          </div>
          <div className="text-xs">299,99kr</div>
        </div>
        <div className="mr-4 border-b py-2">
          <div className="flex justify-between">
            <div>Jeans</div>
            <div className="flex text-lg">
              <button>-</button>
              <input
                type="text"
                className="mx-1 w-6 text-center text-base focus:outline-gray-200"
                value={1}
              />
              <button>+</button>
            </div>
          </div>
          <div className="text-xs">449,99kr</div>
        </div>
        <div className="mr-4 border-b py-2">
          <div className="flex justify-between">
            <div>Baseball Cap</div>
            <div className="flex text-lg">
              <button>-</button>
              <input
                type="text"
                className="mx-1 w-6 text-center text-base focus:outline-gray-200"
                value={1}
              />
              <button>+</button>
            </div>
          </div>
          <div className="text-xs">249,99kr</div>
        </div>
        <div className="mr-4 border-b py-2">
          <div className="flex justify-between">
            <div>Striped Socks</div>
            <div className="flex text-lg">
              <button>-</button>
              <input
                type="text"
                className="mx-1 w-6 text-center text-base focus:outline-gray-200"
                value={3}
              />
              <button>+</button>
            </div>
          </div>
          <div className="text-xs">129,99kr</div>
        </div>
      </div>
      <div className="mb-2 mt-auto flex justify-between text-lg">
        <div>Total:</div>
        <div>299,99kr.</div>
      </div>
      <button className=" rounded-xl bg-peach px-3 py-2">Checkout</button>
    </div>
  );
}

//rgba(0, 0, 0, 0.16) 0px 24px 48px
