import { useState } from "react";

export function HideApp() {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);

  return (
    <div>
      {hide && <p> Teste 1</p>}
      {!hide && <p> Teste 2</p>}

      {hide
        ? <p> Teste 1</p>
        : <p> Teste 2</p>
      }
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setHide(!hide)}>Esconde texto</button>
    </div>
  );
}