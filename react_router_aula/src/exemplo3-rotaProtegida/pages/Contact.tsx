import type { FC } from "react";
import { useLocation } from "react-router";

const Contact: FC = () => {
  const location = useLocation();
  return (
    <div>
      <h2>Contact</h2>
      <pre>{JSON.stringify(location.state, null, 2)}</pre>
    </div>
  );
};

export default Contact;
