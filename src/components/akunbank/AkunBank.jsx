import React from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const AkunBank = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 h-full">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Akun Bank</h2>

        <button className="bg-green-700 text-white rounded p-2">+ Tambah Akun Bank</button>
      </div>
      <div className="mt-4 flex flex-col gap-8">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="bg-gradient-to-br from-yellow-500 to-green-700 w-full h-32 rounded-xl md:w-28 md:h-24"></div>
          <div className="flex flex-col justify-between flex-1">
            <b>Bank KB Bukopin</b>
            <div className="text-gray-400">
              <p>**** 0876 - Yusron Taufiq</p>
              <p>IDR</p>
            </div>
          </div>
          <div className="flex gap-2">
            <a href="#">
              <FaPencilAlt className="text-green-700" />
            </a>
            <a href="#">
              <FaTrash className="text-red-700" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-full h-32 rounded-xl md:w-28 md:h-24"></div>
          <div className="flex flex-col justify-between flex-1">
            <b>Citibank, NA</b>
            <div className="text-gray-400">
              <p>**** 5525 - Si Tampan</p>
              <p>IDR</p>
            </div>
          </div>
          <div className="flex gap-2">
            <a href="#">
              <FaPencilAlt className="text-green-700" />
            </a>
            <a href="#">
              <FaTrash className="text-red-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkunBank;
