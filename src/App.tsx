import {Routes, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Hoverboard from "./components/HoverBoard/Hoverboard";

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='HoverBoard' element={<Hoverboard/>}/>
            </Routes>
        </>
    )
}

export default App
