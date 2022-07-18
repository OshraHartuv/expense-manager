import { Link } from "react-router-dom"

export function TransactionPreview({ transaction , onRemoveTransaction,history}) {
    return (
        <section onClick={()=>window.location.href=`/transaction/edit/${transaction._id}`} className="transaction-preview flex">
            <header className="header flex">
                <div>{transaction.title}</div> 
                <div>
                    { (transaction.type === 'outcome') && <span>- </span> }
                    {transaction.amount}
                </div>
            </header>
            <button onClick={(e)=>{
                e.stopPropagation()
                onRemoveTransaction(transaction._id)
                }}>Delete</button>
            {/* <Link to={`/transaction/edit/${transaction._id}`}>Edit Transaction</Link> */}
        </section>
    );
}
