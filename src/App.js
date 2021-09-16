import NavBarHome from "./SmallComponent/NavbarHome/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { routeHome } from "./Route";

import HomeTemplate from "./Container/HomeTemplate";

function App() {
  const showLayoutHome = (route) => {
    if (route && route.length > 0)
      return route.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
  };
  // <NavBarHome />
  return (
    <BrowserRouter>
      <Switch>{showLayoutHome(routeHome)};</Switch>
    </BrowserRouter>
  );
}

export default App;
