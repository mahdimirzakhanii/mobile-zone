import { useEffect, useState } from "react";
import axios from "axios";
import SingleProductsList from "./SingleProductsList";
import { PulseLoader } from "react-spinners";
import { useSearchParams } from "react-router-dom";
import Paginate from "../Paginate";
import { RiArrowDownSLine } from "react-icons/ri";

const MainProducts = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("All");
  const [serachParams, setSearchParams] = useSearchParams();
  const page = serachParams.get("page");
  const rows = serachParams.get("rows");

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
  
  useEffect(() => {
    const handleProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://672d29e1fd897971564194df.mockapi.io/ap/v1/mobiles"
        );
        console.log(res?.data);
        setProductsList(res?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    handleProducts();
  }, []);

  const filterList =
    filter === "All"
      ? productsList
      : productsList?.filter(
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

      <div className="flex flex-col relative items-start  gap-3 w-3/4">
        <span
          className="text-lg bg-secondary text-tertiary flex items-center justify-center gap-2 cursor-pointer w-28 py-1 rounded-md"
          onClick={() => setShowFilter(!showFilter)}
        >
          {filter ? filter : "All"}
          <RiArrowDownSLine />
        </span>
        {showFilter && (
          <div className=" z-50 absolute bg-secondary text-tertiary w-28 rounded-md cursor-pointer top-10 flex flex-col items-center justify-center ">
            <span
              className="w-full text-center hover:bg-white/30 py-1"
              onClick={() => handleFilter("All")}
            >
              All
            </span>
            <span
              className="w-full text-center hover:bg-white/30 py-1"
              onClick={() => handleFilter("Apple")}
            >
              Apple
            </span>
            <span
              className="w-full text-center hover:bg-white/30 py-1"
              onClick={() => handleFilter("Samsung")}
            >
              Samsung
            </span>
            <span
              className="w-full text-center hover:bg-white/30 py-1"
              onClick={() => handleFilter("Xiaomi")}
            >
              Xiaomi
            </span>
            <span
              className="w-full text-center hover:bg-white/30 py-1"
              onClick={() => handleFilter("Huawei")}
            >
              Huawei
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-5 w-full h-full min-h-[500px] flex-wrap">
        {loading ? (
          <PulseLoader />
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
