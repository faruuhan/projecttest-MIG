import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { Avatar } from "@mantine/core";
import Profile from "../../assets/profile.jpg";

const Layout = (props) => {
  return (
    <main className="bg-green-50 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex">
          <div className="w-6/12">
            <b className="text-gray-300">
              Perusahaan {`>`} <span className="text-stone-800">Mitramas Infosys Global</span>
            </b>
          </div>
          <div className="w-6/12 flex justify-end items-center gap-8">
            <div className="flex gap-4">
              <FaBell className="text-stone-800" />
              <FaSearch className="text-stone-800" />
            </div>
            <div className="flex gap-4 items-center">
              <Avatar radius="xl" src={Profile} />
              <a href="#">
                <p className="text-stone-800 font-medium">John Doe</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </main>
  );
};

export default Layout;
