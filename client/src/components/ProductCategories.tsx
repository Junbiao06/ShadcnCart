"use client";
import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

const ProductCategories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selected = searchParams.get("category");
  const handleCate = (val: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (val && val !== "all") {
      params.set("category", val);
    } else {
      params.delete("category");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <ScrollArea>
      <div className="flex flex-auto justify-between gap-1 bg-primary-foreground p-2 rounded-lg my-4 text-sm text-inherit border border-gray-300">
        {categories.map((cate) => (
          <div
            className={`flex items-center justify-center gap-1 cursor-pointer rounded-md px-4 py-2 whitespace-nowrap ${!selected && cate.slug === "all" && "bg-foreground text-background"} ${cate.slug === selected && "bg-foreground text-background"}`}
            key={cate.name}
            onClick={() => handleCate(cate.slug)}
          >
            {cate.icon}
            {cate.name}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ProductCategories;
