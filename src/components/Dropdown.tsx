"use client";
import React, { useEffect } from "react";
import navbarMenus from "@/elementContents/navbarMenus";
import Link from "next/link";

type Props = {
  isVisible: boolean;
};

const Dropdown = ({ isVisible }: Props) => {
  
  return (
    <div
      className={`absolute top-6 right-1 z-50 ${
        isVisible ? "block" : "hidden"
      } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
      id="user-dropdown"
    >
      <div className="px-4 py-3">
        <span className="block text-sm text-gray-900 dark:text-white">
          Joan Doe
        </span>
        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
          joandoe@knust.edu.gh
        </span>
      </div>
      <ul className="py-2 md:hidden" aria-labelledby="user-menu-button">
        {navbarMenus.map((navbarMenu, index) => {
          const { name, path } = navbarMenu;
          return (
            <li key={index}>
              <Link
                href={path}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
