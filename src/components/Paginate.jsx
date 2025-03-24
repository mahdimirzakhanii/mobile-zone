import { PiCaretLeftFill, PiCaretRightFill } from "react-icons/pi";
import ReactPaginate from "react-paginate";

const Paginate = ({ pageCount, currentPage, setCurrentPage, handleSearch }) => {

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
    handleSearch("page", data.selected + 1);

    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-auto">
      <div className="flex items-center gap-4">
        <ReactPaginate
          onPageChange={handlePageClick}
          previousLabel={<PiCaretLeftFill />}
          nextLabel={<PiCaretRightFill />}
          pageCount={pageCount}
          pageRangeDisplayed={1}
          containerClassName="flex items-center justify-between gap-4"
          pageLinkClassName={
            "text-blue-700 w-8 h-8 rounded-md flex items-center justify-center"
          }
          activeLinkClassName={
            "bg-gray-blue-300 shadow-[0_0_5px_#00000020] text-white w-8 h-8 rounded-md flex items-center justify-center cursor-default"
          }
          previousLinkClassName="text-sm text-blue-700"
          nextLinkClassName="text-sm text-blue-700"
          disabledLinkClassName="cursor-default"
          key={pageCount}
          forcePage={pageCount > 1 && currentPage - 1}
        />
      </div>
    </div>
  );
};

export default Paginate;
