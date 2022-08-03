import React from "react";
import { FaRegBuilding, FaTools, FaHome } from "react-icons/fa";

const Lokasi = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 h-full flex flex-col">
      <div className="flex justify-between mb-5">
        <h2 className="font-bold text-lg">Lokasi</h2>
        <a href="#" className="text-green-500">
          Lihat Semua
        </a>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row h-full">
        <div className="bg-green-700 rounded flex justify-between p-4 items-center lg:flex-1">
          <FaRegBuilding className="text-white text-4xl" />
          <div className="text-center">
            <h3 className="text-white font-bold text-4xl">20</h3>
            <p className="text-white">Induk</p>
          </div>
        </div>
        <div className="bg-green-500 rounded flex justify-between p-4 items-center lg:flex-1">
          <FaTools className="text-white text-4xl" />
          <div className="text-right">
            <h3 className="text-white font-bold text-4xl">3</h3>
            <p className="text-white">Sub lokasi level 1</p>
          </div>
        </div>
        <div className="bg-green-500 rounded flex justify-between p-4 items-center lg:flex-1">
          <FaHome className="text-white text-4xl" />
          <div className="text-right">
            <h3 className="text-white font-bold text-4xl">1</h3>
            <p className="text-white">Sub lokasi level 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lokasi;
