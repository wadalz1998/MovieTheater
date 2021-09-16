import HomeTemplate from "../Container/HomeTemplate";
import ListMovie from "../Container/HomeTemplate/ListMovie";
import NavBarHome from "../SmallComponent/NavbarHome";

const routeHome = [
  {
    path: "/",
    component: NavBarHome,
    exact: true,
  },
  //   {
  //     path: "/about",
  //     component: AboutPage,
  //     exact: false,
  //   },
];

export { routeHome };
