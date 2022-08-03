import React, { useState } from "react";
import { FaFirefoxBrowser, FaRegEnvelope, FaPhoneAlt, FaPencilAlt } from "react-icons/fa";
import { Switch } from "@mantine/core";
import Background from "../../assets/background.jpg";
import Pic from "../../assets/pic.jpg";

const Profile = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden md:w-80 lg:w-80">
      <div className="relative">
        <div className="h-[10rem] overflow-hidden">
          <img src={Background} alt="" />
        </div>
        <img src={Pic} alt="" className="rounded-full shadow-lg absolute -bottom-16 left-0 right-0 mx-auto w-36" />
      </div>
      <div className="my-16 px-4 flex flex-col gap-3">
        <div className="text-center my-10">
          <h1 className="font-bold text-black text-2xl">Mitramas Infosys Global</h1>
          <p className="text-gray-400">Layanan IT</p>
          <div className="flex gap-2 justify-center items-center text-green-700 my-8">
            <FaPencilAlt />
            <a href="#">Sunting profile</a>
          </div>
        </div>
        <div>
          <p className="text-gray-400">Status Perusahaan</p>
          <div className="flex justify-between">
            <b className="text-green-700">Aktif</b>
            <Switch const checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} color="green" />
          </div>
        </div>
        <div>
          <p className="text-gray-400">Singkatan</p>

          <p className="text-black">MIG</p>
        </div>
        <div>
          <p className="text-gray-400">Alamat Perusahaan</p>

          <p className="text-black">Jl. Tebet Raya No.42, Jakarta Selatan</p>
        </div>
        <div>
          <p className="text-gray-400">Penanggung Jawab (PIC)</p>

          <p className="text-black">John Doe</p>
        </div>
        <div>
          <p className="text-gray-400">Tanggal PKP</p>

          <p className="text-black">03 Maret 2021</p>
        </div>
        <div>
          <p className="text-gray-400">Email</p>

          <div className="flex items-center gap-2">
            <FaRegEnvelope className="text-green-700" />
            <a href="mailto:mig@mitrasolusi.group" className="text-green-700 decoration-1">
              mig@mitrasolusi.group
            </a>
          </div>
        </div>
        <div>
          <p className="text-gray-400">No. Telp</p>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-700" />
            <a href="telp:+622156781234" className="text-green-700 decoration-1">
              021-5678-1234
            </a>
          </div>
        </div>
        <div>
          <p className="text-gray-400">Situs Web</p>

          <div className="flex items-center gap-2">
            <FaFirefoxBrowser className="text-green-700" />
            <a href="mitramas.com" className="text-green-700 decoration-1">
              mitramas.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
