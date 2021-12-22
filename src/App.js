// import NavBarHome from "./SmallComponent/NavbarHome/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { routeHome, routeAdmin } from "./Route";
import PageNotFound from "./SmallComponent/PageNotFound"
import LogIn from "./SmallComponent/LogIn"
import Register from "./SmallComponent/Register"
import HomeTemplate from "./Container/HomeTemplate";
import AdminTemplate from "./Container/AdminTemplate"
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
  const showLayoutAdmin = (route) => {
    if (route && route.length > 0)
      return route.map((item, index) => {
        return (
          <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
        )
      })
  }
  // <NavBarHome />
  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routeHome)}
        {showLayoutAdmin(routeAdmin)}
        <Route path="/login" component={LogIn} />
        <Route path="/register" component={Register}/>
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
