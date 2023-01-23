import { KeyboardEvent, useState } from "react";
import styles from "./SearchTodo.module.css";
type Props = {
  onSearchTodo: (query: string) => void;
};
const SearchTodo: React.FC<Props> = ({ onSearchTodo }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    onSearchTodo(searchQuery);
  };

  return (
    <form>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        onKeyUp={handleSubmit}
        className={styles.searchQuery}
        placeholder="Search Your To-Do"
      />
    </form>
  );
};

export default SearchTodo;
