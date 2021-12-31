import DashBoard from "../Container/AdminTemplate/DashBoard"
import ManageFilm from "../Container/AdminTemplate/ManageFilm"
import FilmShowTime from "../Container/AdminTemplate/FilmShowTime"
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
    path: "/managefilm",
    component: ManageFilm,
    exact: false,
  },
  {
    path: "/showtime",
    component: FilmShowTime,
    exact: false,

  }
];
export { routeHome, routeAdmin };
