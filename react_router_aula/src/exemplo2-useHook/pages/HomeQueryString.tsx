import type { FC } from "react";
import { useNavigate } from "react-router";

const Home: FC = () => {
  const navigate = useNavigate();

  const btnActionUser = () => {
    // tem que usar o ? para indicar que é query string.
    // Mais de um parâmetro usa & para separar os parâmetros

    // Option 1 - simples
    navigate("/user/1?tab=queryString");

    // Option 2 - objeto
    navigate({
      pathname: "/user/1",
      search: "?tab=queryString"
    });

  };

  return (
    <div>
      <h2>Home</h2>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <button onClick={btnActionUser}>Ir para User</button>
      </div>
    </div>
  );
};

export default Home;
