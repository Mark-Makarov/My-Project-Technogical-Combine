import { increment,decrement}  from "../../Store/slices/counter";
import { increment1,decrement1}  from "../../Store/slices/counter1";
import { useAppSelector, useAppDispatch} from "../../Hooks/Hooks";

const ReduxElements = () => {
    const dispatch = useAppDispatch();
    const counter = useAppSelector((state) => state.counter);
    const counter1 = useAppSelector((state) => state.counter1);

    const incrementHandler = () => {
        dispatch(increment());
    };

    const decrementHandler = () => {
        dispatch(decrement());
    };

    const incrementHandler1 = () => {
        dispatch(increment1());
    };

    const decrementHandler1 = () => {
        dispatch(decrement1());
    };

    return (
        <>
        <div>
            <div>{counter.value}</div>
            <button onClick={incrementHandler}>Increment by 1 </button>
            <button onClick={decrementHandler}>Decrement by 1 </button>
        </div>
    <div>
        <div>{counter1.value}</div>
        <button onClick={incrementHandler1}>Increment by 1 </button>
        <button onClick={decrementHandler1}>Decrement by 1 </button>
    </div>
            </>
    );
};

export default ReduxElements;