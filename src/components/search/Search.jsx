import { LiaSearchSolid } from "react-icons/lia";
import { PiXBold } from "react-icons/pi";

const Search = ({ setShowSearch }) => {
  return (
    <div className=" w-full h-screen bg-black/70 flex items-start py-20 justify-center">
      <div className="flex top-20 h-16 p-3 rounded bg-gray-blue-100 w-1/2">
        <div className="flex items-center gap-5 justify-between w-full border-2 p-1 rounded-sm border-blue-500">
          <form className="w-full flex items-center">
            <PiXBold
              className="text-blue-600 text-xl cursor-pointer"
              onClick={() => setShowSearch(false)}
            />
            <input
              // ref={searchRef}
              type="text"
              className="text-blue-800 px-3  bg-transparent outline-none w-full"
              // onChange={(e) => setTextSearch(e.target.value)}
            />
            <LiaSearchSolid className="text-2xl text-blue-600" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
