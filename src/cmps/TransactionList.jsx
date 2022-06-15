import { TransactionPreview } from "./TransactionPreview";

export function TransactionList({ transactions , onRemoveTransaction}) {
    return (
        <section className="transaction-list flex">
            {transactions.map((transaction) => (
                <TransactionPreview transaction={transaction} onRemoveTransaction={onRemoveTransaction} key={transaction._id}/>
            ))}
        </section>
    );
}
