import { storageService } from './storageService.js';
import { makeId } from './utilService.js';

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
        spentAt: 1654759120000,
        transactionType: 'outcome'
    },
    {
        _id: 'i2',
        title: 'Fuel',
        amount: 320,
        currency: 'ILS',
        createdAt: 1654671760000,
        spentAt: 1654671760000,
        transactionType: 'income'
    },
    {
        _id: 'i3',
        title: 'Drinks',
        amount: 80,
        currency: 'ILS',
        createdAt: 1654462720000,
        spentAt: 1654462720000,
        transactionType: 'outcome'
    },
    {
        _id: 'i4',
        title: 'Shopping',
        amount: 109,
        currency: 'ILS',
        createdAt: 1654357260000,
        spentAt: 1654354920000,
        transactionType: 'income'
    },
];

var gTransactions = _loadTransactions();

function query(filterBy) {
    let transactionsToReturn = gTransactions;
    // if (filterBy) {
    //     var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
    //     maxBatteryStatus = maxBatteryStatus || Infinity
    //     minBatteryStatus = minBatteryStatus || 0
    //     transactionsToReturn = gTransactions.filter(robot => robot.type.toLowerCase().includes(type.toLowerCase()) && robot.model.toLowerCase().includes(model.toLowerCase())
    //         && (robot.batteryStatus < maxBatteryStatus)
    //         && robot.batteryStatus > minBatteryStatus)
    // }
    return Promise.resolve([...transactionsToReturn]);
}

function removeTransaction(transactionId) {
    const idx = gTransactions.findIndex((transaction) => transactionId === transaction._id);
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
        spentAt: Date.now(),
    };
}

function getById(id) {
    const transaction = gTransactions.find((transaction) => transaction._id === id);
    return Promise.resolve({ ...transaction });
}

function save(transactionToSave) {
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
    if (!Transactions || !Transactions.length) Transactions = gDefaultTransactions;
    storageService.store(STORAGE_KEY, Transactions);
    return Transactions;
}
