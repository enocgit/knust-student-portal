import { IconType } from "react-icons";
import { JsxElement } from "typescript";

interface SidebarMenuInterface {
  path: string;
  name: string;
  icon: ({ pathname, path }: { pathname: string; path: string }) => IconType;
  activeStateBg: ({
    pathname,
    path,
  }: {
    pathname: string;
    path: string;
  }) => JSX.Element;
  activeStateText: ({
    pathname,
    path,
    name,
  }: {
    pathname: string;
    path: string;
    name: string;
  }) => JSX.Element;
}


interface WelcomeCardInterface {
  firstName: string;
  className?: string;
}