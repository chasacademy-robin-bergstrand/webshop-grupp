import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ShoppingBagModal from "./ShoppingBagModal";

export default function ShoppingBagButton() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className=" relative ">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="target:bg-blue-500"
        >
          <ShoppingBagIcon className="h-8 w-8 cursor-pointer hover:opacity-60" />
        </button>

        <ShoppingBagModal open={open} />
      </div>
      <div
        className={`${!open && "hidden"} fixed -inset-10 z-[100]`}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
