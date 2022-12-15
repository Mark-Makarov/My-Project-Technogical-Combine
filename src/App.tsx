import {Routes, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Hoverboard from "./components/HoverBoard/Hoverboard";
import ReduxElements from "./components/ReduxElemets/ReduxElements";
import HackerNews from "./components/HackerNews/HackerNews";
import ToDoApp from "./components/ToDoApp/ToDoApp";
import Chat from './components/Chat/Chat'
// import wsKraken from './components/WsKraken/WsKraken'
import  { ThemeProvider } from "@mui/styles";
import  { createTheme } from "@mui/material/styles";


function App() {
    const theme = createTheme();

    return (
        <>
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='HoverBoard' element={<Hoverboard/>}/>
                <Route path='ReduxElements' element={<ReduxElements/>}/>
                <Route path='HackerNews' element={<HackerNews/>}/>
                <Route path='ToDoApp' element={<ToDoApp/>}/>
                <Route path='Chat' element={<Chat/>}/>
                {/*<Route path='wsKraken' element={<WsKraken/>}/>*/}
            </Routes>
        </ThemeProvider>
        </>
    )
}

export default App;
