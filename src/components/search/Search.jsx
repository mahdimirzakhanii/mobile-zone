// import { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { PiXBold } from "react-icons/pi";
// import { useDispatch, useSelector } from "react-redux";
// import { getListProducts, searchMobile } from "../redux/slice";

const Search = ({ setShowSearch }) => {
  // const { searchList, loading } = useSelector((state) => state.listMobile);
  // const dispatch = useDispatch()
  // const [search, setSearch] = useState("")

  // useEffect(() => {
  //   dispatch(getListProducts())
  // }, [dispatch])

  // useEffect(() => {
  //   dispatch(searchMobile(search))
  // }, [search, dispatch])

  // console.log(searchList)
  return (
    <div className={`w-full h-screen bg-black/70 backdrop-blur-sm flex items-start py-20 justify-center transition-opacity duration-300`}>
      <div className="flex top-20 h-20 p-3 rounded bg-gray-blue-100 w-[90%] lg:w-1/2">
        <div className="flex items-center gap-5 justify-between w-full border-2 p-1 rounded-sm border-blue-500">
          <form className="w-full flex items-center">
            <PiXBold
              className="text-blue-600 text-2xl cursor-pointer"
              onClick={() => setShowSearch(false)}
            />
            <input
              // onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="text-blue-600 px-3 bg-transparent outline-none w-full"
            />
            <LiaSearchSolid className="text-3xl text-blue-600" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
