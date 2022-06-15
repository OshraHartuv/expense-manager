import { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { transactionService } from '../services/transactionService';
import { saveTransaction } from "../store/actions/transactionActions";

export const TransactionEdit = (props) => {
    const [transaction, handleChange, setTransaction] = useForm(null);
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        loadTransaction();
    }, []);

    const dispatch = useDispatch();

    const loadTransaction = async () => {
        const transaction = id
            ? await transactionService.getById(id)
            : transactionService.getEmptyTransaction();
        console.log('transaction', transaction);
        setTransaction(transaction);
    };

    const onSaveTransaction = async (ev) => {
        ev.preventDefault();
        // TODO : Change to store
        await dispatch(saveTransaction({ ...transaction }));
        navigate('/')
       
    };

    // const onRemoveTransaction = async (transactionId) => {
    //     dispatch(removeTransaction(transactionId))
    // }

    const inputRef = (elInput) => {
        if (elInput) elInput.focus();
    };

    if (!transaction) return <div>Loading...</div>;
    return (
        <section className="transaction-edit">
            <h1>{transaction._id ? 'Edit' : 'Add'} Transaction</h1>
            <form onSubmit={onSaveTransaction}>
                <label htmlFor="title">Title</label>
                <input
                   
                    onChange={handleChange}
                    value={transaction.title}
                    type="text"
                    name="title"
                    id="title"
                />
                <label htmlFor="amount">Amount</label>
                <input
                    onChange={handleChange}
                    value={transaction.amount}
                    type="number"
                    name="amount"
                    id="amount"
                />
                <label htmlFor="date">Date</label>
                <input
                    onChange={handleChange}
                    value={new Date(transaction.spentAt).toISOString().slice(0, 10)}
                    type="date"
                    name="date"
                    id="date"
                />
                <button>Save</button>
            </form>
        </section>
    );
};
