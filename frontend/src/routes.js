import Dashboard from "./screens/dashboard";
import Calender from "./screens/calender";
import React from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "./widgets/icons/icons";
import { useSelector, useDispatch } from "react-redux";

import { authData } from "./redux/auth/authslice";

const dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: <Dashboard />,
    key: 1,
    layout: "/admin",
  },
  {
    path: "/calender",
    name: "Calender",
    icon: <BsFillCalendarCheckFill color="inherit" />,
    component: <Calender />,
    key: 1,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: <StatsIcon color="inherit" />,
  //   component: Dashboard,
  //   layout: "/admin",
  //   key: 2,
  // },
  // {
  //   path: "/billing",
  //   name: "Billing",
  //   icon: <CreditIcon color="inherit" />,
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Dashboard,
        layout: "/admin",
      },
    ],
  },
];
export default dashRoutes;
