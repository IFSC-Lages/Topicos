import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import HomeQueryString from "../pages/HomeQueryString";
import About from "../pages/About";
import Contact from "../pages/Contact";
import User from "../pages/User";
import type { FC } from "react";

export const MyRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home-query" element={<HomeQueryString />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="*" element={<h2>Not Found</h2>} />
    </Routes>
  );
};
