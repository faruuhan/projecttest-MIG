import React from "react";

const Aktifitas = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 h-full">
      <div className="mb-5">
        <h2 className="font-bold text-lg">Aktifitas</h2>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-black">Yurson baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa</p>
          <p className="text-gray-400">Hari ini, 06:00</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-black">Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet</p>
          <p className="text-gray-400">Kemaren, 17:32</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-black">Yurson melakukan perubahan profile pada induk Kantor Cabang Bekasi</p>
          <p className="text-gray-400">Kemaren, 17:32</p>
        </div>
      </div>
    </div>
  );
};

export default Aktifitas;
