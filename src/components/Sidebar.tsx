"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import sidebarMenus from "@/elementContents/sidebarMenus";

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
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full pl-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
          <a
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
          </a>
          <ul className="space-y-2 font-medium mt-10 ml-4 text-sm">
            {sidebarMenus.map((sidebarMenu, index) => {
              const { path, name, icon, activeStateBg, activeStateText } =
                sidebarMenu;
              return (
                <li key={index} className={`relative ${pathname === path && "bg-neutral-50 pr-2 py-2 rounded-l-xl"}`}>
                  <a
                    href={path}
                    className="flex items-center p-2 gap-3 text-black/100 font-[400] rounded-lg dark:text-white dark:hover:bg-gray-700"
                  >
                    {icon({ pathname, path })}
                    {activeStateBg({ pathname, path })}
                    {/* {pathname.includes(path) && <div className="absolute left-[-0.15rem] bg-white h-10 w-10 rounded-lg shadow-lg"></div>} */}
                    {activeStateText({ pathname, path, name })}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="mt-14 p-2">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
