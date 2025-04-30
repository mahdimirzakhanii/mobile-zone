import { IoCall, IoMail, IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white gap-6 md:gap-0 px-3 py-5 min-h-[220px] h-[450px] md:h-[220px] max-h-[500px] flex flex-col md:flex-row items-center justify-between">
      <div className="flex basis-full md:basis-[37%] flex-col items-start md:pl-5">
        <span className="text-lg font-bold">About me</span>
        <p className="text-gray-blue-300 w-full md:w-[80%]">
          Our online shop specializes in offering a wide range of mobile phones from top brands. We aim to provide a simple, fast, and reliable shopping experience for everyone looking for their next smartphone.
        </p>
      </div>

      <div className="flex basis-full md:basis-[40%] flex-col items-start gap-3">
        <p className="text-sm text-gray-blue-300 w-full md:w-[80%]">
          Subscribe to our newsletter to receive the latest updates on new mobile arrivals, exclusive offers, and special discounts. Stay connected and never miss a deal!
        </p>
        <div className="flex items-center justify-between sm:justify-start gap-2 w-full">
          <input className="text-sm text-black bg-blue-50 px-3 py-2 rounded-sm outline-none w-full sm:w-[60%]"
            type="email"
            placeholder="Enter Your E-mail"
          />
          <button
            // onClick={}
            className="text-white text-sm bg-yellow-600 py-2 rounded-sm w-28"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex basis-full w-full md:basis-[20%] flex-col items-start md:items-center md:gap-3">
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
