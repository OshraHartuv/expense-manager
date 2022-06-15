import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExpenseList } from '../cmps/ExpenseList';
import { Link } from 'react-router-dom';
import { loadExpenses, removeExpense } from '../store/actions/expenseActions';
// import { loadRobots, removeRobot, setFilterBy } from '../store/actions/robotActions'

export const ExpenseApp = (props) => {
    useEffect(() => {
        dispatch(loadExpenses());
    }, []);

    const { expenses } = useSelector((state) => state.expenseModule);
    const dispatch = useDispatch();

    const onRemoveExpense = async (expenseId) => {
        dispatch(removeExpense(expenseId));
    };

    if (!expenses) return <div>Loading...</div>;

    return (
        <section className="expenses-app">
            <div className='icon-sm'>
                <i className="fa-solid fa-chart-line"></i>
            </div>
            <div className='icon-md'>
                <i className="fa-solid fa-chart-line"></i>
            </div>
            <div className='icon-lg'>
                <i className="fa-solid fa-chart-line"></i>
            </div>
            <Link to="/expense/edit">Add Expense</Link>
            <ExpenseList
                expenses={expenses}
                onRemoveExpense={onRemoveExpense}
            />
        </section>
    );
};
