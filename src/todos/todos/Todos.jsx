import TodoInput from '../todoInput/TodoInput';
import TodoList from '../todoList/TodoList';
import './Todos.scss';
import TodosTotalController from '../todoTotalController/TodosTotalController';
const Todos = () => {
    return (
        <div className="Todos">
            <h2>할일 만들기</h2>
            <TodoInput />
            <TodoList />
            <TodosTotalController />
        </div>
    );
};

export default Todos;
