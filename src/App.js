import './assets/scss/global.scss';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { TransactionApp } from './pages/TransactionApp';
import { TransactionEdit } from './pages/TransactionEdit';
import { SideMenu } from './cmps/SideMenu';

function App() {
    return (
        <Router>
            <div className="app ">
                <main className="main-layout main">
                    <AppHeader />
                    <Routes>
                        <Route path="/" element={<TransactionApp />}>
                            <Route
                                path="transaction/edit"
                                element={<TransactionEdit />}
                                />
                            <Route
                                path="transaction/edit/:id"
                                element={<TransactionEdit />}
                                />
                        </Route>
                    </Routes>
                                {/* <Route index element={<TransactionApp />} > */}
                            {/* </Route> */}
                </main>
                <SideMenu />
            </div>
        </Router>
    );
}

export default App;
