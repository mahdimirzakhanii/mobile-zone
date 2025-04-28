import { IoCall, IoMail, IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white px-3 py-10 flex items-start justify-between">

      <div className="flex basis-[40%] flex-col items-start pl-5">
        <span className="text-lg font-bold">About me</span>
        <p className="text-gray-blue-300 w-[80%]">
          Our online shop specializes in offering a wide range of mobile phones from top brands. We aim to provide a simple, fast, and reliable shopping experience for everyone looking for their next smartphone.
        </p>
      </div>

      <div className="flex basis-[40%] flex-col items-center gap-3">

        <div className="flex items-center gap-10 w-full">
          <input className="text-sm text-black bg-blue-50 px-3 py-2 rounded-sm outline-none w-[60%]" type="email" placeholder="Enter Your E-mail" />
          <button
            // onClick={}
            className="text-white text-sm bg-yellow-600 py-2 rounded-sm w-28"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex basis-[20%] flex-col items-center gap-3">
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
