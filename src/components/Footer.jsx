import { IoCall, IoMail, IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white px-3 py-10 flex items-start justify-between">
      <div className="flex w-full basis-1/4 flex-col items-center gap-3">
        <img className="w-32" src="/assets/img/logo1.png" alt="" />
      </div>

      <div className="flex  basis-2/4 flex-col items-center gap-3">
        <span className="text-lg  font-bold">About me</span>
        <p className="text-gray-blue-300 w-2/3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non mollitia
          neque ullam incidunt officia iste consectetur dolor quos et quisquam
        </p>
      </div>

      <div className="flex basis-1/4 flex-col items-center gap-3">
        <span className="text-lg font-bold w-full text-start">Contact me</span>

        <div className="flex mx-auto flex-col items-center w-full ">
          <div className="flex items-center justify-start gap-3 w-full">
            <IoCall />
            <span className="text-gray-blue-300 cursor-pointer">mobilezone@gmail.com</span>
          </div>
          <div className="flex items-center justify-start gap-3 w-full">
            <IoMail />
            <span className="text-gray-blue-300 cursor-pointer">+12345678-90</span>
          </div>
          <div className="flex items-center justify-start gap-3 w-full">
            <IoLocationSharp />
            <span className="text-gray-blue-300 cursor-pointer">Iran-Tehran</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
