import { TransactionPreview } from './TransactionPreview';

export function TransactionList({
    transactions,
    onRemoveTransaction,
    transactionsMap,
}) {
    console.log('transactionsMap', transactionsMap);
    if (!transactionsMap) return <div>Loading...</div>;
    return (
        <section className="transaction-list flex">
            {Object.keys(transactionsMap).map((month) => (
                <div key={month} className="monthly-list">
                    <h1>
                        <div className='month'>{month}</div>
                        <div className='num-of-trans'>
                            Number of transactions:{' '}
                            {transactionsMap[month].length}
                        </div>
                    </h1>
                    {transactionsMap[month].map((transaction) => (
                        <TransactionPreview
                            transaction={transaction}
                            onRemoveTransaction={onRemoveTransaction}
                            key={transaction._id}
                        />
                    ))}
                </div>
            ))}

            {/* {transactions.map((transaction) => (
                <TransactionPreview transaction={transaction} onRemoveTransaction={onRemoveTransaction} key={transaction._id}/>
            ))} */}
        </section>
    );
}
