import { increment,decrement}  from "../../Store/slices/counter";
import { useAppSelector, useAppDispatch} from "../../Hooks/Hooks";

const ReduxElements = () => {
    const dispatch = useAppDispatch();
    const counter = useAppSelector((state) => state.counter);

    const incrementHandler = () => {
        dispatch(increment());
    };

    const decrementHandler = () => {
        dispatch(decrement());
    };



    return (
        <>
        <div>
            <div>{counter.value}</div>
            <button onClick={incrementHandler}>Increment by 1 </button>
            <button onClick={decrementHandler}>Decrement by 1 </button>
        </div>

            </>
    );
};

export default ReduxElements;