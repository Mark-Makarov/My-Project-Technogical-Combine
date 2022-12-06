import {Routes, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Hoverboard from "./components/HoverBoard/Hoverboard";
import ReduxElements from "./components/ReduxElemets/ReduxElements";

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='HoverBoard' element={<Hoverboard/>}/>
                <Route path='ReduxElements' element={<ReduxElements/>}/>
            </Routes>
        </>
    )
}

export default App
