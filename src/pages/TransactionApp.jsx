import { useCallback, useEffect } from 'react';
import { SearchTransaction } from '../cmps/SearchTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { TransactionList } from '../cmps/TransactionList';
import {
    loadTransactions,
    removeTransaction,
    loadTransactionsMapByMonths,
    setFilterBy,
} from '../store/actions/transactionActions';
import walletImg from '../assets/imgs/wallet.png';
import { CreateTransaction } from '../cmps/CreateTransaction';

// import { transactionService } from '../services/transactionService';
// import { Link } from 'react-router-dom';
// import { useEffectUpdate } from '../hooks/useEffectUpdate';
// import { loadRobots, removeRobot, setFilterBy } from '../store/actions/robotActions'

export const TransactionApp = (props) => {
    useEffect(() => {
        dispatch(loadTransactions());
    }, []);

    const { transactions, transactionsMap } = useSelector(
        (state) => state.transactionModule
    );

    // const { transactionsMap } = useSelector((state) => state.transactionModule);

    // useEffect(() => {
    //     dispatch(loadTransactionsMapByMonths());
    // }, [transactions]);

    const dispatch = useDispatch();

    const onRemoveTransaction = async (transactionId) => {
        dispatch(removeTransaction(transactionId));
        console.log('trans deleted', transactionId);
    };

    const onChangeFilter = useCallback(async (filterBy) => {
        // setState({ filterBy }, loadRobots)
        dispatch(setFilterBy(filterBy));
        dispatch(loadTransactions());
        // dispatch(loadTransactionsMapByMonths());
    }, []);

    if (!transactions ) return <div>Loading...</div>;

    return (
        <section className="transactions-app">
            <header className="flex">
                <div className="flex">
                    <img src={walletImg} alt="" />
                    <div className="prime-header">Home Wallet</div>
                </div>
                <SearchTransaction onChangeFilter={onChangeFilter} />
            </header>
            <TransactionList
                // transactionsMap={transactionsMap}
                transactions={transactions}
                onRemoveTransaction={onRemoveTransaction}
            />
            <CreateTransaction />
        </section>
    );
};
