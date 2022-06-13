import './assets/scss/global.scss';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { ExpenseApp } from './pages/ExpenseApp';
import { ExpenseEdit } from './pages/ExpenseEdit';
import { SideMenu } from './cmps/SideMenu';

function App() {
    return (
        <Router>
            <div className="app ">
                <main className="main-layout">
                <AppHeader />
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
                    <SideMenu/>
            </div>
        </Router>
    );
}

export default App;
