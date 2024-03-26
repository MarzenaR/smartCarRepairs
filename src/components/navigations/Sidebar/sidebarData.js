import { loggedRoutes } from "../../../utils/routes";
import { ImUsers } from "react-icons/im";
import { IoIosListBox } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

import { GiAutoRepair, GiHomeGarage } from "react-icons/gi";

export const userSidebarData = [
  {
    path: loggedRoutes.bookings,
    icon: <IoIosListBox />,
    routeName: "Bookings",
  },
  {
    path: loggedRoutes.account,
    icon: <MdAccountCircle />,
    routeName: "Account",
  },

  {
    path: loggedRoutes.bookingJob,
    icon: <GiAutoRepair />,
    routeName: "Booking job",
  },
];

export const adminSidebarData = [
  {
    path: loggedRoutes.bookings,
    icon: <IoIosListBox />,
    routeName: "Bookings",
  },
  {
    path: loggedRoutes.account,
    icon: <MdAccountCircle />,
    routeName: "Account",
  },

  {
    path: loggedRoutes.bookingJob,
    icon: <GiAutoRepair />,
    routeName: "Booking job",
  },

  {
    path: loggedRoutes.garages,
    icon: <GiHomeGarage />,
    routeName: "Garages",
  },
  {
    path: loggedRoutes.users,
    icon: <ImUsers />,
    routeName: "Users",
  },
];
