export function SideMenu() {
    return (
        <nav className="side-menu main-layout">
            <section className="container flex">
                <div className="user">User</div>
                <div className="side-section">
                    <header className="flex">
                        <div className="prime-header">Wallets</div>
                        <button className="add-btn fa fa-plus"></button>
                    </header>
                    <main>
                        <div className="list-item flex">
                            <div className="icon-md house">

                            <i className="fa fa-solid fa-house"></i>
                            </div>
                            {/* <i className="fa fa-solid fa-house flex"></i> */}
                            <div className="flex info">
                                <div className="name">Home Wallet</div>
                                <div className="amount">$150,000</div>
                            </div>
                        </div>
                        <div className="list-item flex">
                            <div className="icon-md chart">

                            <i className="fa fa fa-chart-line flex"></i>
                            </div>
                            <div className="flex info">
                                <div className="name">Investments</div>
                                <div className="amount">$875,000</div>
                            </div>
                        </div>
                    </main>
                </div>
                <div className="side-section">
                    <header className="flex">
                        <div className="prime-header">Categories</div>
                        <button className="add-btn  fa fa-plus"></button>
                    </header>
                    <main>
                        <div>Bills</div>
                        <div>Education</div>
                    </main>
                </div>
            </section>
        </nav>
    );
}
