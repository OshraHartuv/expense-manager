import { Link } from "react-router-dom"

export function ExpensePreview({ expense , onRemoveExpense}) {
    return (
        <section className="expense-preview flex">
            <header className="header flex">
                <div>{expense.title}</div> 
                <div>{expense.amount}</div>
            </header>
            <div>{expense.spentAt}</div>
            <button onClick={()=>onRemoveExpense(expense._id)}>Delete</button>
            <Link to={`/expense/edit/${expense._id}`}>Edit Expense</Link>
        </section>
    );
}
