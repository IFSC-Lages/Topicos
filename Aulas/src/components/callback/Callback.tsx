import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick, children }: any) => {
  console.log("Renderizou:", children);
  return <button onClick={onClick}>{children}</button>;
});

export function CallBackApp() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  // useCallback impede a recriação da função toda vez que o App renderiza
  const increment = useCallback(() => {
    console.log('increment')
    setCount((prev) => prev + 1);
  }, []);

  const otherAct=()=>{
    console.log('other')
    setOther(!other)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment}>+1</Button>
      <button onClick={otherAct}>Toggle Other</button>
    </div>
  );
}