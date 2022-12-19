import reactLogo from '../../assets/react.svg'
import './MainPage.css'
import {Link} from "react-router-dom";


function App() {

    return (
        <div className="App">
            {/*<div>*/}
            {/*    <img src="/public/vite.svg" className="logo" alt="Vite logo" />*/}
            {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
            {/*</div>*/}
            {/*<h1>Vite + React</h1>*/}

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

            <Link to='Chat'>
                <div className="card">
                    <button>
                        Go to Chat
                    </button>
                </div>
            </Link>

            <Link to='WsKraken'>
                <div className="card">
                    <button>
                        Go to wsKraken
                    </button>
                </div>
            </Link>

            <Link to='CryptoBoard'>
                <div className="card">
                    <button>
                        Go to Crypto Board
                    </button>
                </div>
            </Link>

        </div>
    )
}

export default App
