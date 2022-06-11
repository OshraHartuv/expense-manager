import { ExpensePreview } from "./ExpensePreview";

export function ExpenseList({ expenses , onRemoveExpense}) {
    return (
        <section className="expense-list flex">
            {expenses.map((expense) => (
                <ExpensePreview expense={expense} onRemoveExpense={onRemoveExpense} key={expense._id}/>
            ))}
        </section>
    );
}
