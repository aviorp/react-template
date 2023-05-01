import { lazy } from "react";
import { MenuItemI } from "../types";

export const MENU_ITEMS: MenuItemI[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/test" },
  { label: "Contact", href: "/contact" }
];

export const ROUTES = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/Home"))
  },
  {
    path: "/posts/:id",
    exact: true,
    component: lazy(() => import("../pages/Post"))
  }
];

export const DRAWER_WIDTH: number = 240;
