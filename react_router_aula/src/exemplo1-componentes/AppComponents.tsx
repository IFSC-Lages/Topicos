import { Link } from "react-router";
import { MyRoutes } from "./routes";
import type { FC } from "react";

const AppComponents: FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link>
      </nav>
      <MyRoutes />
    </div>
  );
};

export default AppComponents;
