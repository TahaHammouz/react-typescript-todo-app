import { Todo } from "../models/models";
import styles from "./ToDoFooter.module.css";
type Props = {
  filteredTodos: Todo[];
}
const ToDoFooter:React.FC<Props> = ({filteredTodos}) => {
 
  const totalCount = filteredTodos.length;
  const doneCount = filteredTodos.filter((todo) => todo.isDone).length;
  const remainingCount = filteredTodos.length - doneCount;

  return (
    <footer className={styles.counter}>
      <div className={styles.taskcounter}>
        Created Tasks <span>{totalCount}</span>
      </div>
      <div className={styles.donecounter}>
        Done Tasks{" "}
        <span>
          {doneCount} of {totalCount}
        </span>
      </div>
      <div className={styles.taskcounter}>
        Remaining <span>{remainingCount}</span>
      </div>
    </footer>
  );
};

export default ToDoFooter;
