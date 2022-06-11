export function ExpensePreview({ expense }) {
    return (
        <section className="expense-preview flex">
            <header className="header flex">
                <div>{expense.title}</div> 
                <div>{expense.amount}</div>
            </header>
            <div>{expense.spentAt}</div>
        </section>
    );
}
