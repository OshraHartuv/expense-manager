import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransactionList } from '../cmps/TransactionList';
import { Link } from 'react-router-dom';
import { loadTransactions, removeTransaction } from '../store/actions/transactionActions';
import walletImg from '../assets/imgs/wallet.png'
// import { loadRobots, removeRobot, setFilterBy } from '../store/actions/robotActions'

export const TransactionApp = (props) => {
    useEffect(() => {
        dispatch(loadTransactions());
    }, []);

    const { transactions } = useSelector((state) => state.transactionModule);
    const dispatch = useDispatch();

    const onRemoveTransaction = async (transactionId) => {
        dispatch(removeTransaction(transactionId));
    };

    if (!transactions) return <div>Loading...</div>;

    return (
        <section className="transactions-app">
            <header className='flex'>
                <img src={walletImg} alt="" />
                {/* <div className="icon-lg house">
                    <i className="fa fa-solid fa-house"></i>
                </div> */}
                <div className="prime-header">Home Wallet</div>
            </header>
            <Link to="/transaction/edit">Add Transaction</Link>
            <TransactionList
                transactions={transactions}
                onRemoveTransaction={onRemoveTransaction}
            />
        </section>
    );
};