import {
  HiArrowsExpand,
  HiChartPie,
  HiDeviceTablet,
  HiQuestionMarkCircle,
} from "react-icons/hi";

const sidebarMenus = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: ({ pathname, path }) => {
      return (
        <HiChartPie
          className={`relative z-10 text-xl ${
            pathname.includes(path) && "text-success"
          }`}
        />
      );
    },
    activeStateBg: ({ pathname, path }) => {
      if (pathname.includes(path)) {
        return (
          <div className="absolute -translate-x-2 bg-white h-10 w-10 rounded-lg shadow-lg sidebar-menu__active"></div>
        );
      }
    },
    activeStateText: ({ pathname, path, name }) => {
      return (
        <span
          className={`ml-1 font-[200] ${pathname.includes(path) && "text-black"}`}
        >
          {name}
        </span>
      );
    },
  },
  {
    path: "/about",
    name: "About",
    icon: ({ pathname, path }) => {
      return (
        <HiQuestionMarkCircle
          className={`relative z-10 text-xl ${
            pathname.includes(path) && "text-success"
          }`}
        />
      );
    },
    activeStateBg: ({ pathname, path }) => {
      if (pathname.includes(path)) {
        return (
          <div className="absolute -translate-x-2 bg-white h-10 w-10 rounded-lg shadow-lg sidebar-menu__active"></div>
        );
      }
    },
    activeStateText: ({ pathname, path, name }) => {
      return (
        <span
          className={`ml-1 font-[400] ${
            pathname.includes(path) && "text-black"
          }`}
        >
          {name}
        </span>
      );
    },
  },
  {
    path: "/devices",
    name: "Manage Devices",
    icon: ({ pathname, path }) => {
      return (
        <HiDeviceTablet
          className={`relative z-10 text-xl ${
            pathname.includes(path) && "text-success"
          }`}
        />
      );
    },
    activeStateBg: ({ pathname, path }) => {
      if (pathname.includes(path)) {
        return (
          <div className="absolute -translate-x-2 bg-white h-10 w-10 rounded-lg shadow-lg sidebar-menu__active"></div>
        );
      }
    },
    activeStateText: ({ pathname, path, name }) => {
      return (
        <span
          className={`ml-1 font-[400] ${
            pathname.includes(path) && "text-black"
          }`}
        >
          {name}
        </span>
      );
    },
  },
  {
    path: "/password/change",
    name: "Change Password",
    icon: ({ pathname, path }) => {
      return (
        <HiArrowsExpand
          className={`relative z-10 text-xl ${
            pathname.includes(path) && "text-success"
          }`}
        />
      );
    },
    activeStateBg: ({ pathname, path }) => {
      if (pathname.includes(path)) {
        return (
          <div className="absolute -translate-x-2 bg-white h-10 w-10 rounded-lg shadow-lg sidebar-menu__active"></div>
        );
      }
    },
    activeStateText: ({ pathname, path, name }) => {
      return (
        <span
          className={`ml-1 font-[400] ${
            pathname.includes(path) && "text-black"
          }`}
        >
          {name}
        </span>
      );
    },
  },
];

export default sidebarMenus;
