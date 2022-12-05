import reactLogo from '../../assets/react.svg'
import './MainPage.css'
import {Link} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <div>
                <img src="/public/vite.svg" className="logo" alt="Vite logo" />
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <h1>Vite + React</h1>

            <Link to='Hoverboard'>
                <div className="card">
                    <button>
                        Go to Hoverboard
                    </button>
                </div>
            </Link>

            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
