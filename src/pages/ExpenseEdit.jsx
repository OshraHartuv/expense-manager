import { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { expenseService } from '../services/expenseService';
import { saveExpense } from "../store/actions/expenseActions";

export const ExpenseEdit = (props) => {
    const [expense, handleChange, setExpense] = useForm(null);
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        loadExpense();
    }, []);

    const dispatch = useDispatch();

    const loadExpense = async () => {
        const expense = id
            ? await expenseService.getById(id)
            : expenseService.getEmptyExpense();
        console.log('expense', expense);
        setExpense(expense);
    };

    const onSaveExpense = async (ev) => {
        ev.preventDefault();
        // TODO : Change to store
        await dispatch(saveExpense({ ...expense }));
        navigate('/')
       
    };

    // const onRemoveExpense = async (expenseId) => {
    //     dispatch(removeExpense(expenseId))
    // }

    const inputRef = (elInput) => {
        if (elInput) elInput.focus();
    };

    if (!expense) return <div>Loading...</div>;
    return (
        <section className="expense-edit">
            <h1>{expense._id ? 'Edit' : 'Add'} Expense</h1>
            <form onSubmit={onSaveExpense}>
                <label htmlFor="title">Title</label>
                <input
                   
                    onChange={handleChange}
                    value={expense.title}
                    type="text"
                    name="title"
                    id="title"
                />
                <label htmlFor="amount">Amount</label>
                <input
                    onChange={handleChange}
                    value={expense.amount}
                    type="number"
                    name="amount"
                    id="amount"
                />
                <label htmlFor="date">Date</label>
                <input
                    onChange={handleChange}
                    value={new Date(expense.spentAt).toISOString().slice(0, 10)}
                    type="date"
                    name="date"
                    id="date"
                />
                <button>Save</button>
            </form>
        </section>
    );
};
