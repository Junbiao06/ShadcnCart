"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "./ui/native-select";

const ProductFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="flex flex-end items-center justify-end gap-2 pb-2">
      <p>Sort by:</p>
      <NativeSelect
        defaultValue={"newest"}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <NativeSelectOptGroup label="Basic">
          <NativeSelectOption value={"newest"}>Newest</NativeSelectOption>
          <NativeSelectOption value={"oldest"}>Oldest</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Price">
          <NativeSelectOption value={"asc"}>Low to High</NativeSelectOption>
          <NativeSelectOption value={"desc"}>High to Low</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  );
};

export default ProductFilter;
