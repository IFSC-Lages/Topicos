import { useState } from "react";

// interface do componente InputAdd
interface InputAddProps {
  onAdd(value: string): void; //evento (função)
}

export const InputAdd = (props: InputAddProps) => {
  const [value, setValue] = useState("");

  const handleAdd = () =>{
    props.onAdd(value);
    setValue('');
  }

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={handleAdd}
      >
        Adicionar
      </button>
    </div>
  );
};
