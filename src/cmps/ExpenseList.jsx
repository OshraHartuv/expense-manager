import { ExpensePreview } from "./ExpensePreview";

export function ExpenseList({ expenses }) {
    return (
        <section className="expense-list flex">
            {expenses.map((expense) => (
                <ExpensePreview expense={expense}/>
            ))}
        </section>
    );
}
