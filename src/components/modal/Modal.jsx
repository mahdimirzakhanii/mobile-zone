import { useEffect } from "react";

const Modal = ({ children, isOpen = true }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  });
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-black/40 z-50">
      <div className="flex flex-col items-center justify-center w-full">
        {children}
      </div>
    </div>
  );
};

export default Modal;
