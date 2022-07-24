import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransactionList } from '../cmps/TransactionList';
import { Link } from 'react-router-dom';
import {
    loadTransactions,
    removeTransaction,
    loadTransactionsMapByMonths,
} from '../store/actions/transactionActions';
import walletImg from '../assets/imgs/wallet.png';
import { transactionService } from '../services/transactionService';
import { useEffectUpdate } from '../hooks/useEffectUpdate';
import { CreateTransaction } from '../cmps/CreateTransaction';
// import { loadRobots, removeRobot, setFilterBy } from '../store/actions/robotActions'

export const TransactionApp = (props) => {
    useEffect(() => {
        dispatch(loadTransactions());
    }, []);

    const { transactions } = useSelector((state) => state.transactionModule);

    const { transactionsMap } = useSelector((state) => state.transactionModule);

    useEffect(() => {
        dispatch(loadTransactionsMapByMonths());
    }, [transactions]);

    const dispatch = useDispatch();

    const onRemoveTransaction = async (transactionId) => {
        dispatch(removeTransaction(transactionId));
        console.log('trans deleted', transactionId);
    };

    if (!transactions || !transactionsMap) return <div>Loading...</div>;

    return (
        <section className="transactions-app">
            <header className="flex">
                <img src={walletImg} alt="" />
                <div className="prime-header">Home Wallet</div>
            </header>
            <TransactionList
                transactionsMap={transactionsMap}
                transactions={transactions}
                onRemoveTransaction={onRemoveTransaction}
            />
            <CreateTransaction />
        </section>
    );
};
