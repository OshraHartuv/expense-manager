import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function TransactionPreview({
    transaction,
    onRemoveTransaction,
    history,
}) {
    const navigate = useNavigate();
    return (
        <section
            onClick={() => navigate(`/transaction/edit/${transaction._id}`)}
            className="transaction-preview flex"
        >
            <div className="header flex">
                <div className="title-date">
                    <div className="title bold">{transaction.title}</div>
                    <div className="date">
                        {new Date(transaction.time).toString().substring(4, 10)}
                    </div>
                </div>
                <div className="price-actions">
                    <div className="price bold">
                        {transaction.type === 'outcome' && <span>-</span>}
                        {new Intl.NumberFormat(undefined, {
                            style: 'currency',
                            currency: transaction.currency,
                        }).format(transaction.amount)}
                    </div>
                    <div className="actions">
                        <button
                            className="fa-solid fa-x remove"
                            onClick={(e) => {
                                e.stopPropagation();
                                onRemoveTransaction(transaction._id);
                            }}
                        ></button>
                    </div>
                </div>
            </div>
            {/* <Link to={`/transaction/edit/${transaction._id}`}>Edit Transaction</Link> */}
        </section>
    );
}
