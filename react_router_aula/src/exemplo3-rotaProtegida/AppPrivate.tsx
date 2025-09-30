import { Link } from "react-router";
import { MyRoutes } from "./routes";
import type { FC } from "react";

const AppPrivate: FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <MyRoutes />
    </div>
  );
};
export default AppPrivate;
