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
                        Go to Hoverboard(vanilla JS)
                    </button>
                </div>
            </Link>

            <Link to='ReduxElements'>
                <div className="card">
                    <button>
                        Go to ReduxElements
                    </button>
                </div>
            </Link>

            <Link to='DrawingApp'>
                <div className="card">
                    <button>
                        Go to DrawingApp(vanilla JS)
                    </button>
                </div>
            </Link>

            <Link to='HackerNews'>
                <div className="card">
                    <button>
                        Go to HackerNews
                    </button>
                </div>
            </Link>

            <Link to='ToDoApp'>
                <div className="card">
                    <button>
                        Go to ToDoApp
                    </button>
                </div>
            </Link>

            <p className="read-the-docs">
                Hi
            </p>
        </div>
    )
}

export default App
