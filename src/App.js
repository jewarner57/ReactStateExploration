import './App.css';
import Counter from './Counter'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>React State Exploration</h1>
                <Counter step={1} max={35} min={0} />
                <Counter step={3} max={30} min={0} />
                <Counter step={50} max={350} min={-350} />
            </header>
        </div>
    );
}

export default App;
