import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="hidden md:flex relative items-center">
      <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />

      <Input
        type="text"
        placeholder="Search..."
        className="pl-9 focus-visible:ring-1 placeholder:font-playwrite"
      />
    </div>
  );
};

export default SearchBar;
