import { useRef, useState } from 'react';
import './TodoInput.scss';
import { addBtn } from '../../store/modules/todoSlice';
import { useDispatch } from 'react-redux';
const TodoInput = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const textRef = useRef('');
    const chgInput = (e) => {
        setText(e.target.value);
    };
    const onSub = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        dispatch(addBtn(text));
        setText('');
        textRef.current.focus();
    };
    return (
        <form onSubmit={onSub} className="TodoInput">
            <input onChange={chgInput} ref={textRef} type="text" value={text} />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInput;
