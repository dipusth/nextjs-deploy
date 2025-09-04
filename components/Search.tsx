import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  const handleSearch = () => {
    console.log("searching.. handleSearch");
  };
  return (
    <div className="flex items-center max-w-3xs min-w-[400px] border px-3 rounded-sm search-wrapper">
      <Search />
      <Input
        type="text"
        className="border-0 focus:border-0 outline-none focus-visible:shadow-none focus-visible:outline-none"
        onChange={handleSearch}
        placeholder="Search products..."
      />
    </div>
  );
};

export default SearchBar;
