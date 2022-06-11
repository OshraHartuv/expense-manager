import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExpenseList } from '../cmps/ExpenseList';
import { loadExpenses , removeExpense} from '../store/actions/expenseActions';
// import { loadRobots, removeRobot, setFilterBy } from '../store/actions/robotActions'

export const ExpenseApp = (props) => {
    useEffect(() => {
        dispatch(loadExpenses());
    }, []);

    const { expenses } = useSelector((state) => state.expenseModule);
    const dispatch = useDispatch();

    const onRemoveExpense = async (expenseId) => {
        dispatch(removeExpense(expenseId))
    }

    if (!expenses) return <div>Loading...</div>;

    return (
        <section className="expenses-app main-layout">
            <ExpenseList expenses={expenses} />
        </section>
    );
};