import React from "react";
import { HiOutlineShare } from "react-icons/hi";

const Relasi = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 h-full">
      <div className="flex justify-between mb-5">
        <h2 className="font-bold text-lg">Relasi</h2>
        <a href="#" className="text-green-500">
          Lihat Semua
        </a>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <HiOutlineShare className="text-4xl" />
          <div>
            <h3 className="font-bold text-4xl">20</h3>
            <p>Memiliki</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <HiOutlineShare className="text-4xl" />
          <div>
            <h3 className="font-bold text-4xl">108</h3>
            <p>Menggunakan</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <HiOutlineShare className="text-4xl" />
          <div>
            <h3 className="font-bold text-4xl">67</h3>
            <p>Meminjam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relasi;
