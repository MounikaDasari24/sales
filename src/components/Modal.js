import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed top-219px left-560px w-800px h-600px bg-white rounded-2xl shadow-xl">
        <div className="relative">
          {children}
        </div>
        <button className="absolute top-851px left-936px w-48px h-48px font-light text-4xl text-center bg-white" onClick={() => {}}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
