import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Primary = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Primary;
