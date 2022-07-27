import { SearchTransaction } from "./SearchTransaction";

export function AppHeader() {
    return (
        <header className="app-header flex">
            <div className="home">
                <div className="logo"></div>
                <div className="name bold">Budget</div>
            </div>
            <SearchTransaction/>
            <div className="links flex">
                <a>Overview</a>
                <a>Finance</a>
            </div>
        </header>
    );
}
