import type { FC } from "react";
import { useLocation } from "react-router";

const Contact: FC = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        <h2>Contact</h2>
        <pre>{JSON.stringify(location.state, null, 2)}</pre>
      </div>
      <div>
        <h2>Object location</h2>
        <pre>{JSON.stringify(location, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Contact;
