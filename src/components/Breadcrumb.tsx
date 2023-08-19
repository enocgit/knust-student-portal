import Link from "next/link";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import sidebarMenusOutline from "@/elementContents/sidebarMenusOutline";
import activitiesOutline from "@/elementContents/activitiesOutline"

type Props = {};

const Breadcrumb = (props: Props) => {
  const pathname = usePathname();
  const getBreadcrumbSubMenu = useMemo(() => {
      let capitalized;
      const pathnameArray = pathname.split("/");
    if (pathnameArray.length > 2) {
        const subPathArray = pathnameArray[2].split('-')
        const subpathArrayCapitalized = subPathArray.map((str) => {
            let capSub = str.slice(0, 1).toUpperCase() + str.slice(1);
            return capSub
        })
        capitalized = subpathArrayCapitalized.join(' ')
        return capitalized
    }
  }, [pathname])

  const getBreadcrumbMenu = useMemo(() => {
    const pathnameArray = pathname.split("/");
    let capitalized;
     capitalized =
      pathnameArray[1].slice(0, 1).toUpperCase() + pathnameArray[1].slice(1);
    return capitalized;
  }, [pathname]);
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          {sidebarMenusOutline.map((sidebarMenuOutline, index) => {
            const { icon, path } = sidebarMenuOutline;
            if (pathname.includes(path)) {
              return (
                <Link key={index} href={path}>
                  {icon}
                  {getBreadcrumbMenu}
                </Link>
              );
            } else return null;
          })}
        </li>
        <li>
        {activitiesOutline.map((activityOutline, index) => {
            const {id, path, icon} = activityOutline
            if (id !== 1 && pathname.includes(path)) {
              return (
                <Link key={index} href={path}>
                  {icon}
                  {getBreadcrumbSubMenu}
                </Link>
              );
            } 
            else if (id == 1 && pathname.includes('/profile')) {
                return (
                  <Link key={index} href={path}>
                    {icon}
                    {getBreadcrumbSubMenu}
                  </Link>
                );
              }
            else return null;
          })}
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
