import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { delBtn, onMode, onSave, updBtn } from '../../store/modules/todoSlice';

const TodoItem = ({ item }) => {
    const dispatch = useDispatch();
    const { id, text, isDone, isMod } = item;
    const [txt, setTxt] = useState(text);
    return (
        <li className={isDone ? 'on' : ''}>
            <div>
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={(e) => {
                        const checked = e.target.checked;
                        const sendCheckedObj = { checked, id };
                        dispatch(updBtn(sendCheckedObj));
                    }}
                />
                {!isMod ? (
                    <p>
                        <em>{text}</em>
                        <button onClick={() => dispatch(onMode(id))}>수정</button>
                    </p>
                ) : (
                    <p>
                        <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
                        <button
                            onClick={() => {
                                const sendTxtObj = { id, txt };
                                dispatch(onSave(sendTxtObj));
                            }}
                        >
                            저장
                        </button>
                    </p>
                )}
            </div>
            <button onClick={() => dispatch(delBtn(id))}>삭제</button>
        </li>
    );
};

export default TodoItem;
