import './assets/scss/global.scss';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { ExpenseApp } from './pages/ExpenseApp';
import { ExpenseEdit } from './pages/ExpenseEdit';

function App() {
    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main className="container">
                    <Routes>
                        <Route path="/">
                            <Route
                                path="expense/edit/:id"
                                element={<ExpenseEdit />}
                            />
                            <Route
                                path="expense/edit"
                                element={<ExpenseEdit />}
                            />
                            <Route index element={<ExpenseApp />} />
                        </Route>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
