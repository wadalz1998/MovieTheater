import NavBarHome from "../SmallComponent/NavbarHome";

import DashBoard from "../Container/AdminTemplate/DashBoard"
import AddTest from "../Container/AdminTemplate/add"
import DetailsPage from "../Container/HomeTemplate/DetailsPage"
import BookTicket from "../Container/HomeTemplate/BookTicket"
import HomePage from "../Container/HomeTemplate/homepage"
const routeHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/detail/:id",
    component: DetailsPage,
    exact: false,
  },
  {
    path: "/bookticket",
    component: BookTicket,
    exact: false,
  },
  //   {
  //     path: "/about",
  //     component: AboutPage,
  //     exact: false,
  //   },
];

const routeAdmin = [
  {
    path: "/dashboard",
    component: DashBoard,
    exact: true,
  },
  {
    path: "/add",
    component: AddTest,
    exact: false,
  }
];
export { routeHome, routeAdmin };
