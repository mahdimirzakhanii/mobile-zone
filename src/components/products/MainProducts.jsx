import { useEffect, useRef, useState } from "react";
import SingleProductsList from "./SingleProductsList";
import { HashLoader } from "react-spinners";
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
  const [recordsPerPage, setRecordsPerPage] = useState(rows ? rows : 20);
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
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);


  return (
    <div className="flex flex-col items-center w-full gap-5 px-1 pt-24 lg:pt-32">
      <span className="text-xl lg:text-2xl font-semibold text-start w-full pl-3 lg:px-28">Products</span>
      <div className="flex flex-col relative items-start gap-3 w-full pl-3 lg:px-28" ref={filterRef}>
        <span
          className="text-sm lg:text-lg bg-blue-950 text-gray-blue-400 flex items-center justify-between cursor-pointer w-24 lg:w-28 py-1 px-3 rounded-md"
          onClick={(e) => {
            e.stopPropagation();
            setShowFilter(!showFilter);
          }}
        >
          {filter ? filter : "All"}
          <RiArrowDownSLine />
        </span>
        {showFilter && (
          <div className="z-50 absolute bg-blue-950 text-gray-blue-400 w-28 lg:w-36 rounded-md cursor-pointer top-[29px] lg:top-10 flex flex-col items-center justify-center  ">
            <span
              className="w-full text-sm lg:text-base text-start hover:bg-blue-900 first:rounded-t-md last:rounded-b-md py-1 px-3"
              onClick={() => handleFilter("All")}
            >
              All
            </span>
            <span
              className="w-full text-sm lg:text-base  text-start hover:bg-blue-900 first:rounded-t-md last:rounded-b-md py-1 px-3"
              onClick={() => handleFilter("Apple")}
            >
              Apple
            </span>
            <span
              className="w-full text-sm lg:text-base  text-start hover:bg-blue-900 first:rounded-t-md last:rounded-b-md py-1 px-3"
              onClick={() => handleFilter("Samsung")}
            >
              Samsung
            </span>
            <span
              className="w-full text-sm lg:text-base  text-start hover:bg-blue-900 first:rounded-t-md last:rounded-b-md py-1 px-3"
              onClick={() => handleFilter("Xiaomi")}
            >
              Xiaomi
            </span>
            <span
              className="w-full text-sm lg:text-base  text-start hover:bg-blue-900 first:rounded-t-md last:rounded-b-md py-1 px-3"
              onClick={() => handleFilter("Huawei")}
            >
              Huawei
            </span>
          </div>
        )}
      </div>

      <div className="w-full min-h-screen flex justify-center">
        {loading ? (
          <HashLoader color="#dda01e" cssOverride={{}} width={100} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5 w-full md:w-[85%]">
            {records?.map((item) => (
              <SingleProductsList item={item} key={item?.id} />
            ))}
          </div>
        )
        }
      </div >
      <Paginate
        handleSearch={handleSearch}
        pageCount={npage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div >
  );
};
export default MainProducts;
