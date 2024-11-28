import { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { PiX } from "react-icons/pi";

const Search = ({ setShowSearch }) => {
  const [textSearch, setTextSearch] = useState("");

  console.log(textSearch);

  return (
    <div className=" w-full h-screen bg-black/70 flex items-start py-20 justify-center">
      <div className="flex top-20 h-16 p-3 rounded bg-tertiary w-1/2">
        <div className="flex items-center gap-5 justify-between w-full border-2 p-1 rounded-sm border-gold">
          <LiaSearchSolid className="text-2xl text-black" />
          <input
            type="text"
            className="text-black bg-transparent outline-none w-full"
            onChange={(e) => setTextSearch(e.target.value)}
          />
          <PiX
            className="text-black text-xl cursor-pointer"
            onClick={() => setShowSearch(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
