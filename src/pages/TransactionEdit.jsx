import { useEffect, useRef } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { transactionService } from '../services/transactionService';
import { saveTransaction } from '../store/actions/transactionActions';
import { useClickOutside } from '../hooks/useClickOutside';

export const TransactionEdit = () => {
    const [transaction, handleChange, setTransaction] = useForm(null);
    const params = useParams();
    const { id } = params;
    const navigate = useNavigate();

    useEffect(() => {
        loadTransaction();
    }, [params.id]);

    const dispatch = useDispatch();

    const modalRef = useRef();
    useClickOutside(modalRef, () => {
        navigate('/');
    });

    const loadTransaction = async () => {
        const transaction = params.id
            ? await transactionService.getById(params.id)
            : transactionService.getEmptyTransaction();
        console.log('transaction', transaction);
        setTransaction(transaction);
    };

    const onSaveTransaction = async (ev) => {
        ev.preventDefault();
        await dispatch(saveTransaction({ ...transaction }));
        navigate('/');
    };

    // const onRemoveTransaction = async (transactionId) => {
    //     dispatch(removeTransaction(transactionId))
    // }

    const inputRef = (elInput) => {
        if (elInput) elInput.focus();
    };

    if (!transaction) return <div>Loading...</div>;
    return (
        <div className="modal-wrapper">
            <section className="transaction-edit wrapped-modal" ref={modalRef}>
                <h1>{transaction._id ? 'Edit' : 'Add'} Transaction</h1>
                <form onSubmit={onSaveTransaction}>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="title"> Title </label>
                            </td>
                            <td>
                                <input
                                    onChange={handleChange}
                                    value={transaction.title}
                                    type="text"
                                    name="title"
                                    id="title"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="amount"> Amount </label>
                            </td>
                            <td>
                                <input
                                    onChange={handleChange}
                                    value={transaction.amount}
                                    type="number"
                                    name="amount"
                                    id="amount"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="type"> Type </label>
                            </td>
                            <td>
                                <select
                                    onChange={handleChange}
                                    value={(transaction.type)}
                                    // type=""
                                    name="type"
                                    id="type"
                                >
                                    <option value="income">Income</option>
                                    <option value="outcome">Outcome</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="date"> Date </label>
                            </td>
                            <td>
                                <input
                                    onChange={handleChange}
                                    value={new Date(transaction.time)
                                        .toISOString()
                                        .slice(0, 10)}
                                    type="date"
                                    name="time"
                                    id="date"
                                />
                            </td>
                        </tr>
                        <tr>
                            {/* <td colSpan={2}> */}

                            <button>Save</button>
                            {/* </td> */}
                        </tr>
                    </table>
                </form>
            </section>
        </div>
    );
};
