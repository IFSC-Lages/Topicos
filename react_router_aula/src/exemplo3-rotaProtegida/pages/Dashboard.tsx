import type { FC } from "react";
import { useNavigate } from "react-router";

const Dashboard: FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth"); // limpa autenticação
    navigate("/login", { replace: true }); // volta para o login
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Dashboard protegido</h2>
      <p>Bem-vindo! Você está logado e pode acessar esta página.</p>
      <button onClick={logout} style={{ marginTop: "1rem" }}>
        Sair
      </button>
    </div>
  );
};

export default Dashboard;
