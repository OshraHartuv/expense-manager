import { getTransactionMapByMonths } from '../services/utilService';
import { TransactionPreview } from './TransactionPreview';

export function TransactionList({ transactions, onRemoveTransaction }) {
    const transactionsMap = getTransactionMapByMonths(transactions);

    const getBalance = (month) => {
        const amount = transactionsMap[month].reduce(
            (acc, trans) =>
                acc + (trans.type === 'income' ? trans.amount : -trans.amount),
            0
        );
        return new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'ILS',
        }).format(amount);
    };

    if (!transactionsMap) return <div>Loading...</div>;
    return (
        <section className="transaction-list flex">
            {Object.keys(transactionsMap).map((month) => (
                <div key={month} className="monthly-list">
                    <h1>
                        <div className="month">{month}</div>
                        <div className="month-summary">
                            <div>
                                Number of transactions:{' '}
                                {transactionsMap[month].length}
                            </div>
                            <div>
                                Total balance for {month.slice(0, -5)}:{' '}
                                {getBalance(month)}
                            </div>
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
        </section>
    );
}
