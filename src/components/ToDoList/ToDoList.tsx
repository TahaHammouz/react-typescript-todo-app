import Task from "../Task/Task";
import styles from "./ToDoList.module.css";
import { Todo } from "../models/models";

interface ToDoListProps  {
  filteredTodos: Todo[];
  onDelete: (id: number) => void;
  onToggleTodo: (id: number) => void;
};

const ToDoList: React.FC<ToDoListProps> = ({
  filteredTodos,
  onDelete,
  onToggleTodo,
}) => {
  return (
    <ul className={styles.list}>
      {filteredTodos.map((todo) => (
        <li key={todo.id} className={styles.task}>
          <Task onDeleteHandler={onDelete} todo={todo} onToggleTodo={onToggleTodo} />
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
