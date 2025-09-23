interface ITodoItemProps {
  id: string;
  label: string;
  onRemove(): void;
}
export const TodoItem = ({ id, label, onRemove }: ITodoItemProps) => {
  return (
    <li key={id}>
      {" "}
      {label}
      <button onClick={onRemove}>Remover</button>
    </li>
  );
};
