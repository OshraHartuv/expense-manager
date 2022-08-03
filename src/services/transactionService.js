import { storageService } from './storageService.js';
import { getDateStr, makeId } from './utilService.js';

export const transactionService = {
    query,
    removeTransaction,
    getEmptyTransaction,
    getById,
    save,
};

const STORAGE_KEY = 'transactions';

const gDefaultTransactions = [
    {
        _id: 'i1',
        title: 'Food',
        amount: 150,
        currency: 'ILS',
        createdAt: 1654759120000,
        time: 1654759120000,
        type: 'outcome',
    },
    {
        _id: 'i2',
        title: 'Fuel',
        amount: 320,
        currency: 'ILS',
        createdAt: 1654671760000,
        time: 1654671760000,
        type: 'income',
    },
    {
        _id: 'i3',
        title: 'Drinks',
        amount: 80,
        currency: 'ILS',
        createdAt: 1654462720000,
        time: 1654462720000,
        type: 'outcome',
    },
    {
        _id: 'i4',
        title: 'Shopping',
        amount: 109,
        currency: 'ILS',
        createdAt: 1654357260000,
        time: 1654354920000,
        type: 'outcome',
    },
    {
        _id: 'i5',
        title: 'FOOD',
        amount: 160,
        currency: 'ILS',
        createdAt: 1658079176000,
        time: 1658079176000,
        type: 'outcome',
    },
    {
        _id: 'i6',
        title: 'MORE FOOD',
        amount: 160,
        currency: 'ILS',
        createdAt: 1652808776000,
        time: 1652808776000,
        type: 'outcome',
    },
];

var gTransactions = _loadTransactions();

function query(filterBy) {
    let transactionsToReturn = gTransactions;
    if (filterBy) {
        var { text } = filterBy
        const regex = new RegExp(text, 'i')
        // maxBatteryStatus = maxBatteryStatus || Infinity
        // minBatteryStatus = minBatteryStatus || 0
        transactionsToReturn = gTransactions.filter((transaction) => regex.test(transaction.title))
    }

    // let bugs = gBugs.filter((bug) => regex.test(bug.title))
    console.log('transactionsToReturn ',transactionsToReturn);
    return Promise.resolve([...transactionsToReturn]);
}

function removeTransaction(transactionId) {
    const idx = gTransactions.findIndex(
        (transaction) => transactionId === transaction._id
    );
    gTransactions.splice(idx, 1);
    if (!gTransactions.length) gTransactions = gDefaultTransactions.slice();
    storageService.store(STORAGE_KEY, gTransactions);
    return Promise.resolve();
}

function getEmptyTransaction() {
    return {
        title: '',
        amount: 0,
        currency: 'ILS',
        time: Date.now(),
    };
}

function getById(id) {
    const transaction = gTransactions.find(
        (transaction) => transaction._id === id
    );
    return Promise.resolve({ ...transaction });
}

function save(transactionToSave) {
    transactionToSave.time = +transactionToSave.time
    if (transactionToSave._id) {
        const idx = gTransactions.findIndex(
            (transaction) => transaction._id === transactionToSave._id
        );
        gTransactions.splice(idx, 1, transactionToSave);
    } else {
        transactionToSave._id = makeId();
        transactionToSave.createdAt = Date.now();
        gTransactions.push(transactionToSave);
    }
    storageService.store(STORAGE_KEY, gTransactions);
    return Promise.resolve(transactionToSave);
}


function _loadTransactions() {
    let Transactions = storageService.load(STORAGE_KEY);
    if (!Transactions || !Transactions.length)
    Transactions = gDefaultTransactions;
    storageService.store(STORAGE_KEY, Transactions);
    return Transactions;
}
