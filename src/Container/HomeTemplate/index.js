import React from "react";
import { Route } from "react-router-dom";
import NavBarHome from "../../SmallComponent/NavbarHome";
import ListMovie from "./ListMovie";
import BannerCarousel from "./BannerCarousel";
import MovieTheater from "./MovieTheater";

function HomeLayout(props) {
  return (
    <div>
      <NavBarHome />
      {props.children}
    </div>
  );
}
export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
          <BannerCarousel />
          <ListMovie />
          <MovieTheater />
        </HomeLayout>
      )}
    />
  );
}