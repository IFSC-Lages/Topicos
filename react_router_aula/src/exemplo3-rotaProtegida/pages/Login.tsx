import type { FC, FormEvent } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from || "/";

  const login = (e: FormEvent) => {
    e.preventDefault(); // prevenir o reload da página

    // credenciais estáticas para demonstração
    const userDemo = "admin";
    const senhaDemo = "1234";

    if (email === userDemo && senha === senhaDemo) {
      localStorage.setItem("auth", "true");
      setErro("");
      navigate(from, { replace: true });
    } else {
      setErro("Usuário ou senha inválidos!");
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "2rem auto" }}>
      <h2>Login</h2>
      <form onSubmit={login}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Usuário:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ display: "block", width: "100%", marginTop: "0.5rem" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Senha:
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              style={{ display: "block", width: "100%", marginTop: "0.5rem" }}
            />
          </label>
        </div>

        {erro && <p style={{ color: "red" }}>{erro}</p>}

        <button type="submit">Fazer login</button>
      </form>
      <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "gray" }}>
        <strong>Dica:</strong> usuário <code>admin</code> e senha <code>1234</code>
      </p>
    </div>
  );
};

export default Login;
