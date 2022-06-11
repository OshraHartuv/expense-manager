export function ExpensePreview({ expense , onRemoveExpense}) {
    return (
        <section className="expense-preview flex">
            <header className="header flex">
                <div>{expense.title}</div> 
                <div>{expense.amount}</div>
            </header>
            <div>{expense.spentAt}</div>
            <button onClick={()=>onRemoveExpense(expense._id)}>Delete</button>
        </section>
    );
}
