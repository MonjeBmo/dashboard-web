import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrGroup } from "react-icons/gr";

import { MdAssignmentReturned } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const SIDEBAR_LINKS = [
    { id: 1, path: "/members", name: "Miembros Grupo #4", icon: GrGroup },
    { id: 2, path: "/report1", name: "Ventas al Dia", icon: TbReportAnalytics },
    {
      id: 3,
      path: "/report2",
      name: "Venta por Producto",
      icon: AiOutlineProduct,
    },
    {
      id: 4,
      path: "/report3",
      name: "Devoluciones",
      icon: MdAssignmentReturned,
    },
  ];
  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white">
      {/* { Navigation links} */}

      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-green-500 ${
              activeLink == index ? "bg-green-100 text-green-500" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => {
                handleLinkClick(index);
              }}
            >
              <span>{link.icon()}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
