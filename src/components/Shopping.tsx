import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

export const Shopping = () => {
  const [cartItemCount] = useState(0);

  return (
    <div className="relative">
      <Link
        href="/carrito"
        className="transition-colors duration-300 hover:text-[#DF2A35]"
      >
        <FiShoppingCart className="text-2xl" />
      </Link>
      {/* Contador de artículos */}
      <div
        className={`absolute -bottom-2 -right-2 w-4 h-4 rounded-full text-center 
        ${cartItemCount > 0 ? "bg-red-500" : "bg-gray-400"} 
        text-white text-xs font-bold`}
      >
        {cartItemCount}
      </div>
    </div>
  );
};
