"use client";

import profileMenus from "@/elementContents/profileMenus";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <main className="min-h-screen">
      <div className="tabs">
        {profileMenus.map((profileMenu, index) => {
          const { name, path } = profileMenu;
          return (
            <Link
              key={index}
              href={path}
              className={`tab tab-lifted ${
                pathname.includes(path) && "tab-active text-success"
              }`}
            >
              {name}
            </Link>
          );
        })}
      </div>
      <div className="bg-white py-8 px-8 min-[580px]:px-20 xs:w-10/12 lg:w-full ">
        {children}
      </div>
    </main>
  );
}
