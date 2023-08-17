"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import navbarMenus from "@/elementContents/navbarMenus";
import { HiBell } from "react-icons/hi";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 md:ml-[16rem] bg-white/90 backdrop-blur-sm border-b border-gray-200 w-screen md:w-[calc(100vw-16rem)] dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-2">
          <div className="relative inline-flex h-7 w-7 md:hidden">
            <Image
              src="/assets/png/knust-logo.png"
              alt="knust logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h1 className="text-base font-[600] hidden min-[260px]:inline-flex">Dashboard</h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center md:order-2">
            {/* Student picture */}
            <button
              type="button"
              className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <div className="relative w-8 h-8 rounded-full">
                <Image src="/assets/svg/welcome-illustration.svg" alt="user profile" fill style={{ objectFit: "cover" }} />
              </div>
            </button>
            {/* Dropdown items */}
           
            {/* Hamburger */}
            {/* <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button> */}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col p-4 md:p-0 text-sm mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="relative">
                <HiBell className="text-xl" />
                <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center w-3 h-3 font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-1 dark:border-gray-900"></div>
              </li>

              {navbarMenus.map((navbarMenu, index) => {
                const { path, name } = navbarMenu;
                return (
                  <li key={index}>
                    <a
                      href={path}
                      className="block py-2 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-success md:p-0 dark:text-white md:dark:hover:text-success dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
