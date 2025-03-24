import { useEffect, useState } from "react";
import SingleProductsList from "./SingleProductsList";
import { GridLoader } from "react-spinners";
import { useSearchParams } from "react-router-dom";
import Paginate from "../Paginate";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getListProducts } from "../redux/slice";

const MainProducts = () => {
  const [serachParams, setSearchParams] = useSearchParams();
  const page = serachParams.get("page");
  const rows = serachParams.get("rows");

  const [filter, setFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);
  const dispatch = useDispatch();
  const { listMobile, loading } = useSelector((state) => state?.listMobile);

  useEffect(() => {
    dispatch(getListProducts());
  }, [dispatch]);

  function handleSearch(key, value) {
    setSearchParams((prevParams) => {
      if (value === null || value === "") {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const filterList =
    filter === "All"
      ? listMobile
      : listMobile?.filter(
          (item) => item?.name?.toLowerCase() === filter?.toLowerCase()
        );

  const [currentPage, setCurrentPage] = useState(page ? page : 1);
  const [recordsPerPage, setRecordsPerPage] = useState(rows ? rows : 10);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filterList?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filterList?.length / recordsPerPage);

  const handleFilter = (model) => {
    setFilter(model);
    setShowFilter(false);
    setCurrentPage(1);
    handleSearch("page", "");
  };

  return (
    <div className="flex flex-col items-center w-full gap-5 pt-32">
      <span className="text-2xl text-start w-full px-20">Products</span>
      <div className="flex flex-col relative items-start gap-3 w-full px-24">
        <span
          className="text-lg bg-blue-950 text-gray-blue-400 flex items-center justify-between cursor-pointer w-28 py-1 px-3 rounded-md"
          onClick={() => setShowFilter(!showFilter)}
        >
          {filter ? filter : "All"}
          <RiArrowDownSLine />
        </span>
        {showFilter && (
          <div className=" z-50 absolute bg-blue-950 text-gray-blue-400 w-28 rounded-md cursor-pointer top-10 flex flex-col items-center justify-center ">
            <span
              className="w-full text-start hover:bg-blue-900 first:rounded-t-md last:rounded-b-md py-1 px-3"
              onClick={() => handleFilter("All")}
            >
              All
            </span>
            <span
              className="w-full text-start hover:bg-blue-900 first:rounded-t-md last:rounded-b-md py-1 px-3"
              onClick={() => handleFilter("Apple")}
            >
              Apple
            </span>
            <span
              className="w-full text-start hover:bg-blue-900 first:rounded-t-md last:rounded-b-md py-1 px-3"
              onClick={() => handleFilter("Samsung")}
            >
              Samsung
            </span>
            <span
              className="w-full text-start hover:bg-blue-900 first:rounded-t-md last:rounded-b-md py-1 px-3"
              onClick={() => handleFilter("Xiaomi")}
            >
              Xiaomi
            </span>
            <span
              className="w-full text-start hover:bg-blue-900 first:rounded-t-md last:rounded-b-md py-1 px-3"
              onClick={() => handleFilter("Huawei")}
            >
              Huawei
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-5 w-full h-full min-h-[500px] flex-wrap">
        {loading ? (
          <GridLoader color="#dda01e" cssOverride={{}} width={0} />
        ) : (
          records?.map((item, index) => (
            <SingleProductsList key={index} item={item} />
          ))
        )}
      </div>
      <Paginate
        handleSearch={handleSearch}
        pageCount={npage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default MainProducts;
