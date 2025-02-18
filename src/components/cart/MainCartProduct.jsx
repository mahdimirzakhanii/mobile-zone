import { useEffect, useState } from "react";
import Summary from "./Summary";
import TableListCartProduct from "./TableListCartProduct";
import { useDispatch, useSelector } from "react-redux";
import { handleBasket } from "../redux/basketSlice";
const MainCartProduct = () => {
  const [refreshList, setRefreshList] = useState(0);
  const dispatch = useDispatch();
  const { dataBasket, loading } = useSelector((state) => state?.basket);
  useEffect(() => {
    setRefreshList(1);
  }, [setRefreshList]);

  //delete product
  useEffect(() => {
    if (loading || refreshList !== 1) return;
    dispatch(handleBasket());
    setRefreshList(0);
  }, [dispatch, refreshList]);

  console.log(dataBasket);
  return (
    <div className="flex px-3 items-center gap-5 mt-32 w-full">
      <div className="w-[70%] xl:w-3/4">
        <TableListCartProduct
          setRefreshList={setRefreshList}
          dataBasket={dataBasket}
        />
      </div>
      <div className="w-[30%] xl:w-1/4">
        <Summary setRefreshList={setRefreshList} dataBasket={dataBasket} />
      </div>
    </div>
  );
};

export default MainCartProduct;
