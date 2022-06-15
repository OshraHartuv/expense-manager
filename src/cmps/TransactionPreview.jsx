import { Link } from "react-router-dom"

export function TransactionPreview({ transaction , onRemoveTransaction}) {
    return (
        <section className="transaction-preview flex">
            <header className="header flex">
                <div>{transaction.title}</div> 
                <div>{transaction.amount}</div>
            </header>
            <div>{transaction.spentAt}</div>
            <button onClick={()=>onRemoveTransaction(transaction._id)}>Delete</button>
            <Link to={`/transaction/edit/${transaction._id}`}>Edit Transaction</Link>
        </section>
    );
}
