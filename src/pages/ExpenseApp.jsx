import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExpenseList } from '../cmps/ExpenseList';
import { Link } from 'react-router-dom';
import { loadExpenses, removeExpense } from '../store/actions/expenseActions';
import walletImg from '../assets/imgs/wallet.png'
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
            <header className='flex'>
                <img src={walletImg} alt="" />
                {/* <div className="icon-lg house">
                    <i className="fa fa-solid fa-house"></i>
                </div> */}
                <div className="prime-header">Home Wallet</div>
            </header>
            <Link to="/expense/edit">Add Expense</Link>
            <ExpenseList
                expenses={expenses}
                onRemoveExpense={onRemoveExpense}
            />
        </section>
    );
};
