import type { FC } from "react";
import { useNavigate } from "react-router";

const dataUser = {
  name: "João",
  lastName: "Silva",
  email: "joao@exemple.com",
  phone: "99999-9999",
  comment: "Olá, gostaria de mais informações.",
};

const Home: FC = () => {
  const navigate = useNavigate();

  const btnAction = () => {
    navigate("/contact", { state: { userInfo: dataUser } });
  };

  return (
    <div>
      <h2>Home</h2>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <button onClick={btnAction}>Ir para Contact (com state)</button>
      </div>
    </div>
  );
};

export default Home;
