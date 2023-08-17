import { HiOutlineArchive, HiOutlineChartPie, HiOutlineDeviceTablet, HiOutlineQuestionMarkCircle, HiOutlineUserCircle } from "react-icons/hi";

const sidebarMenus = [
    {
        "path": "/",
        "name": "Dashboard",
        "icon": ({pathname, path}) => {
            return (<HiOutlineChartPie className={`relative z-10 text-xl ${pathname === path && 'text-success'}`} />)
        },
        "activeStateBg": ({pathname, path}) => {
            if (pathname === path) {
                return (<div className="absolute left-[-0.15rem] bg-white h-10 w-10 rounded-lg shadow-lg"></div>)
            }
        },
        "activeStateText": ({pathname, path, name}) => {
            return (<span className={`ml-1 font-[200] ${pathname === path && "text-black"}`}>{name}</span>)
        }
        
    },
    {
        "path": "/about",
        "name": "About",
        "icon": ({pathname, path}) => {
            return (<HiOutlineQuestionMarkCircle className={`relative z-10 text-xl ${pathname.includes(path) && 'text-success'}`} />)
        },
        "activeStateBg": ({pathname, path}) => {
            if (pathname.includes(path)) {
                return (<div className="absolute left-[-0.15rem] bg-white h-10 w-10 rounded-lg shadow-lg"></div>)
            }
        },
        "activeStateText": ({pathname, path, name}) => {
            return (<span className={`ml-1 font-[400] ${pathname.includes(path) && "text-black"}`}>{name}</span>)
        }
    },
    {
        "path": "/devices",
        "name": "Manage Devices",
        "icon": ({pathname, path}) => {
            return (<HiOutlineDeviceTablet className={`relative z-10 text-xl ${pathname.includes(path) && 'text-success'}`} />)
        },
        "activeStateBg": ({pathname, path}) => {
            if (pathname.includes(path)) {
                return (<div className="absolute left-[-0.15rem] bg-white h-10 w-10 rounded-lg shadow-lg"></div>)
            }
        },
        "activeStateText": ({pathname, path, name}) => {
            return (<span className={`ml-1 font-[400] ${pathname.includes(path) && "text-black"}`}>{name}</span>)
        }
    },
    {
        "path": "/password/change",
        "name": "Change Password",
        "icon": ({pathname, path}) => {
            return (<HiOutlineArchive className={`relative z-10 text-xl ${pathname.includes(path) && 'text-success'}`} />)
        },
        "activeStateBg": ({pathname, path}) => {
            if (pathname.includes(path)) {
                return (<div className="absolute left-[-0.15rem] bg-white h-10 w-10 rounded-lg shadow-lg"></div>)
            }
        },
        "activeStateText": ({pathname, path, name}) => {
            return (<span className={`ml-1 font-[400] ${pathname.includes(path) && "text-black"}`}>{name}</span>)
        }
    }
]

export default sidebarMenus;