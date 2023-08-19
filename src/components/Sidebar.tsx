"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import sidebarMenus from "@/elementContents/sidebarMenus";
import BottomDrawer from "./BottomDrawer";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
};

const Sidebar = ({ children }: Props) => {
  // USEPATHNAME
  const pathname = usePathname();

  // USESTATE
  // const [sidebarMenus, setSidebarMenus] = useState(sidebarLinks);

  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full pl-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
          <Link
            href="https://flowbite.com/"
            className="flex items-center pl-2.5 mb-5 space-x-3"
          >
            <div className="relative h-7 w-7">
              <Image
                src="/assets/png/knust-logo.png"
                alt="knust logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <span className="self-center text-base font-bold whitespace-nowrap dark:text-white">
              Student Portal
            </span>
          </Link>
          <ul className="relative space-y-2 font-medium mt-10 ml-4 text-sm">
            {sidebarMenus.map((sidebarMenu, index) => {
              const { path, name, icon, activeStateBg, activeStateText } =
                sidebarMenu;
              return (
                <li
                  key={index}
                  className={`relative ${
                    pathname.includes(path) &&
                    "bg-grayscale-100 pr-2 py-2 rounded-l-xl"
                  }`}
                >
                  <Link
                    href={path}
                    className="relative flex items-center p-2 gap-3 text-black/100 font-[400] rounded-lg dark:text-white dark:hover:bg-gray-700"
                  >
                    {icon({ pathname, path })}
                    {activeStateBg({ pathname, path })}
                    {/* {pathname.includes(path) && <div className="absolute -translate-x-2 bg-white h-10 w-10 rounded-lg shadow-lg"></div>} */}
                    {activeStateText({ pathname, path, name })}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      <div className="p-4 md:ml-64">
        <div className="mt-14 p-2">{children}</div>
      </div>

      {/* Drawer smaller screens */}

      <BottomDrawer />
    </>
  );
};

export default Sidebar;
