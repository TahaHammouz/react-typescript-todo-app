import styles from "./AddToDo.module.css";
import { useState } from "react";

interface Props{
  onAddTodo:(todo:string) => void
}
const AddToDo:React.FC<Props> = ({onAddTodo}) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form className={styles.form} onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        className={styles.input}
        placeholder="Eg. Go To GYM !!"
      />
      <button className={styles.submitButton} type="submit">Create</button>
    </form>
  );
};

export default AddToDo;
