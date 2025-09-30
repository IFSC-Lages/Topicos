import { Link } from "react-router";
import { MyRoutes } from "./routes";
import type { FC } from "react";

const AppHook: FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/home-query">Home-QueryString</Link>  |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> | <Link to="/user">User</Link>
      </nav>
      <MyRoutes />
    </div>
  );
};
export default AppHook;
