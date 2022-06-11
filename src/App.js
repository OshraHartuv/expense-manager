import './assets/scss/global.scss';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppHeader } from './cmps/AppHeader';
import { ExpenseApp } from './pages/ExpenseApp';

function App() {
    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main className="container">
                    <Routes>
                        <Route path="/" element={<ExpenseApp/>} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
