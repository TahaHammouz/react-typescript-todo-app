import Task from "../Task/Task";
import styles from "./ToDoList.module.css";
import { Todo } from "../models/models";

type ToDoListProps = {
  Todo: Todo[];
  onDelete: (id: number) => void;
  onToggleTodo: (id: number) => void;
};

const ToDoList: React.FC<ToDoListProps> = ({
  Todo,
  onDelete,
  onToggleTodo,
}) => {
  return (
    <ul className={styles.list}>
      {Todo.map((todo) => (
        <li key={todo.id} className={styles.task}>
          <Task delete={onDelete} todo={todo} onToggleTodo={onToggleTodo} />
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
