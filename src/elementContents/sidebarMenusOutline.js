import {
  HiOutlineArrowsExpand,
  HiOutlineChartPie,
  HiOutlineDeviceTablet,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";

const sidebarMenusOutline = [
  { id: 1,
    path: "/dashboard",
    icon: <HiOutlineChartPie className="mr-2" />
  },
  { id: 2,
    path: "/about",
    icon: <HiOutlineQuestionMarkCircle className="mr-2" />
  },
  { id: 3,
    path: "/devices",
    icon: <HiOutlineDeviceTablet className="mr-2" />
  },
  { id: 4,
    path: "/password/change",
    icon: <HiOutlineArrowsExpand className="mr-2" />
  },
];

export default sidebarMenusOutline;
