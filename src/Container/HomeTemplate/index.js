import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import NavBarHome from "../../SmallComponent/NavbarHome";
import Footer from "../../SmallComponent/Footer/footer"
function HomeLayout(props) {
  return (
    <div>
      <NavBarHome />
      {props.children}
      <Footer />
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
        </HomeLayout>
      )}
    />
  );
}
