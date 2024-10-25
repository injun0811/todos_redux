import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoList.scss';
const TodoList = () => {
    const { showList } = useSelector((state) => state.todo);
    return (
        <ul className="TodoList">
            {showList.map((item) => (
                <TodoItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default TodoList;
