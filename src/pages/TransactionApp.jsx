import { useCallback, useEffect } from 'react';
import { SearchTransaction } from '../cmps/SearchTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { TransactionList } from '../cmps/TransactionList';
import {
    loadTransactions,
    removeTransaction,
    setFilterBy,
} from '../store/actions/transactionActions';
import walletImg from '../assets/imgs/wallet.png';
import { CreateTransaction } from '../cmps/CreateTransaction';
import { Outlet } from 'react-router-dom';


export const TransactionApp = (props) => {
    useEffect(() => {
        dispatch(loadTransactions());
    }, []);

    const { transactions, transactionsMap } = useSelector(
        (state) => state.transactionModule
    );

    const dispatch = useDispatch();

    const onRemoveTransaction = async (transactionId) => {
        dispatch(removeTransaction(transactionId));
        console.log('trans deleted', transactionId);
    };

    const onChangeFilter = useCallback(async (filterBy) => {
        dispatch(setFilterBy(filterBy));
        dispatch(loadTransactions());
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
                transactions={transactions}
                onRemoveTransaction={onRemoveTransaction}
            />
            <CreateTransaction />
            <Outlet/>
        </section>
    );
};
