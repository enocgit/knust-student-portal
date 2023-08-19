"use client";
import React, { useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import sidebarMenus from "@/elementContents/sidebarMenus";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

const BottomDrawer = (props: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const pathname = usePathname()

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <div
      id="drawer-swipe"
      className={`fixed block z-40 w-full overflow-y-auto bg-white/90 backdrop-blur-sm border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform left-0 ${
        isDrawerOpen ? "bottom-0" : "bottom-[60px]"
      } right-0 ${
        isDrawerOpen ? "translate-y-0" : "translate-y-full"
      } md:hidden`}
      // tabindex="-1"
      aria-labelledby="drawer-swipe-label"
    >
      {/* Drawer toggler */}
      <div
        className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
        data-drawer-toggle="drawer-swipe"
        onClick={toggleDrawer}
      >
        <span className="absolute w-8 h-1 -translate-x-1/2 bg-success rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
        
        <h5
          id="drawer-swipe-label"
          className="flex space-x-2 items-center text-base text-gray-500 dark:text-gray-400 font-medium"
        >
          <HiCursorClick className="text-xl" />
          <div>
            {isDrawerOpen
              ? "Click to close menu"
              : "Click to open menu"}
          </div>
        </h5>
      </div>
      <div className="grid gap-4 p-4 min-[300px]:grid-cols-2">
        {sidebarMenus.map((sidebarMenu, index) => {
          const { name, path, icon } = sidebarMenu;
          return (
            <Link href={path} key={index}>
              <div
                className="p-4  rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700"
              >
                <div className="flex flex-row items-center min-[300px]:flex-col min-[300px]:gap-2">
                  <div className="flex justify-center items-center p-2 bg-green-50 dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px] min-[300px]:mx-auto">
                    {icon({pathname, path})}
                  </div>
                  <div className="font-medium text-center text-gray-500 dark:text-gray-400">
                    {name}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomDrawer;
