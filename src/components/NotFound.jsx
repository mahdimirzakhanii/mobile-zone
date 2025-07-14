import { BiSolidError } from "react-icons/bi";

const NotFound = () => {
    return (
        <div className="mt-32 w-full flex justify-evenly items-center flex-col md:flex-row">
            <img className="w-[300px] md:w-[500px]" src="/public/assets/image/public/not-found.png" alt="404" />
            <div className="flex flex-col gap-2 md:gap-5 items-center justify-center">
                <p className="text-red-700 text-3xl md:text-5xl flex items-center">Error Page
                    <BiSolidError />
                </p>
                <p className="text-gray-blue-800 text-3xl md:text-5xl">Page Not Found</p>
            </div>
        </div>
    )
}

export default NotFound