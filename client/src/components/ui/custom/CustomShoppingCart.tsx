import { ShoppingCart } from "lucide-react";
import { Badge } from "../badge";
import Link from "next/link";

const CustomShoppingCart = () => {
  return (
    // <Link href={"/cart"}>
    <div className="relative">
      <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
      <Badge className="absolute -top-3 -right-3 rounded-full text-xs justify-center items-center bg-amber-300 text-black w-4 h-4">
        99
      </Badge>
    </div>
    // </Link>
  );
};

export default CustomShoppingCart;
