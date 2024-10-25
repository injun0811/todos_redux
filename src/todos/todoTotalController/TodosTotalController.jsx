import { useDispatch, useSelector } from 'react-redux';
import './TodosTotalController.scss';
import { completeShow, ingShow, totalShow } from '../../store/modules/todoSlice';

const TodosTotalController = () => {
    const { showList, btnClick } = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const totalCnt = showList.length;
    return (
        <div className="buttonDiv">
            <button onClick={() => dispatch(totalShow())} className={btnClick === 'all' ? 'on' : ''}>
                전체
            </button>
            <button onClick={() => dispatch(completeShow())} className={btnClick === 'com' ? 'on' : ''}>
                완료
            </button>
            <button onClick={() => dispatch(ingShow())} className={btnClick === 'ing' ? 'on' : ''}>
                진행중
            </button>
            <p>총개수 : {totalCnt}</p>
        </div>
    );
};

export default TodosTotalController;
