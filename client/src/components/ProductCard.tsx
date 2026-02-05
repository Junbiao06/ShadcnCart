"use client";

import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { NativeSelect, NativeSelectOption } from "./ui/native-select";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ProductCard = ({ product }: { product: Product }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const handleProductTypes = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="shadow-lg rounded-lg border border-gray-200 overflow-hidden">
      {/* Image */}
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-2 sm:gap-6 p-4">
        {/* Name & Description */}
        <h1 className="text-md font-bold tracking-wider">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* Size & Color */}
        <div className="flex flex-col items-start xl:flex-row xl:items-center text-xs flex-auto gap-2 xl:gap-6">
          <div className="flex flex-col flex-shrink-0 sm:w-1/2 gap-2">
            <span>size</span>
            <NativeSelect
              className="h-[2rem] w-[6rem] text-xs flex-shrink-0 mx-2"
              onChange={(e) =>
                handleProductTypes({ type: "size", value: e.target.value })
              }
            >
              <NativeSelectOption value="">Select</NativeSelectOption>
              {product.sizes.map((i) => (
                <NativeSelectOption value={i} key={i}>
                  {i.toUpperCase()}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </div>

          <div className="flex flex-col gap-2 flex-1 sm:w-1/2">
            <span className="flex justify-between">
              <div className="">color</div>
              <div className="">{product.colors.length}</div>
            </span>
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="h-[2rem] w-[6rem] flex items-center gap-2 pb-2 mx-2">
                {product.colors.map((c) => (
                  <div
                    className={cn(
                      "w-5 h-5 object-fit rounded-full border border-gray-200 cursor-pointer aspect-[1/1]",
                      productTypes.color === c && "border-gray-500 scale-110",
                    )}
                    key={c}
                    style={{ backgroundColor: c }}
                    onClick={() =>
                      handleProductTypes({
                        type: "color",
                        value: c,
                      })
                    }
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
        {/* Price & AddToCart */}
        <div className="flex items-center justify-between">
          <p className="font-semibold tracking-wider">
            ${product.price.toFixed(2)}
          </p>
          <Button className="ring-1 ring-gray-200 shadow-lg rouned-md px-2 py-1 text-sm cursor-pointer bg-background text-foreground hover:bg-foreground hover:text-background tranistion-all duration-300 flex items-center w-[4rem] sm:w-[8rem]">
            <ShoppingCart />
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="inline sm:hidden">Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
