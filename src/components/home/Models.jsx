const category = [
    {
        name: "Apple",
        imgSrc: "/assets/image/public/aple-logo.png",
    },
    {
        name: "Huawei",
        imgSrc: "/assets/image/public/huawei-logo.png",
    },
    {
        name: "Samsung",
        imgSrc: "/assets/image/public/samsung-logo.png",
    },
    {
        name: "Xiaomi",
        imgSrc: "/assets/image/public/xiaomi-logo.png",
    },

];

const Models = () => {
    return (
        <div className="flex flex-col items-center w-full gap-10 ">
            <div className="flex flex-col items-start gap-4 w-[85%]">
                <span className="text-xl lg:text-3xl font-medium text-start ">Browse By Category</span>
            </div>
            <div className="w-[85%] grid grid-cols-2 md:grid-cols-4 place-items-center gap-y-10 ">
                {category?.map((item, index) => {
                    // reverse
                    const isSamsung = item?.name === "Samsung";
                    const isXiaomi = item?.name === "Xiaomi";

                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-center gap-5 w-fit md:gap-8 justify-center group cursor-pointer
                                ${isSamsung ? "order-2 md:order-1" : ""}
                                ${isXiaomi ? "order-1 md:order-2" : ""}
                         `}>
                            <div
                                className={`flex flex-col items-center justify-center w-32 h-32 lg:w-44 lg:h-44 rounded-3xl duration-500 group 
                                        ${(item?.name === "Xiaomi" || item?.name === "Huawei")
                                        ? "bg-red-100 group-hover:-rotate-45"
                                        : "bg-blue-100 group-hover:-rotate-45"
                                    }`}>
                                <img
                                    className="w-24 h-24 lg:w-32 lg:h-32 object-contain transform group-hover:rotate-45 duration-500"
                                    src={item?.imgSrc}
                                    alt={item?.name}
                                />
                            </div>
                            <span className="text-base  lg:text-2xl text-blue-600">{item?.name}</span>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default Models