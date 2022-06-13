export function SideMenu() {
    return (
        <nav className="side-menu main-layout">
            <section className="container flex">
                <div className="user">User</div>
                <div class="wallets">
                    <header>
                        <h1>Wallets</h1>
                        <button className="add-btn">+</button>
                    </header>
                    <main>
                        <div>Home</div>
                        <div>Investments</div>
                    </main>
                </div>
                <div class="Categories">
                    <header>
                        <h1>Categories</h1>
                        <button className="add-btn">+</button>
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
