import type { FC } from "react";
import { useNavigate } from "react-router";

const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => navigate("/contact", { state: { from: "home" } })}>
        Ir para Contact (com state)
      </button>
    </div>
  );
};

export default Home;
