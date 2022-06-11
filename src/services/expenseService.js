import { storageService } from './storageService.js'
import { makeId } from './utilService.js'

export const expenseService = {
    query,
    removeExpense
}

const STORAGE_KEY = 'expenses'

const gDefaultExpenses = [
    {_id: 'i1', title:'Food', amount: 150 , currency: 'ILS', createdAt: 1654759120000, spentAt: 1654759120000},
    {_id: 'i2', title:'Fuel', amount: 320 , currency: 'ILS', createdAt: 1654671760000, spentAt: 1654671760000},
    {_id: 'i3', title:'Drinks', amount: 80 , currency: 'ILS', createdAt: 1654462720000, spentAt: 1654462720000},
    {_id: 'i4', title:'Shopping', amount: 109 , currency: 'ILS', createdAt: 1654357260000, spentAt: 1654354920000}
]

var gExpenses = _loadExpenses()

function query(filterBy) {
    let expensesToReturn = gExpenses;
    // if (filterBy) {
    //     var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
    //     maxBatteryStatus = maxBatteryStatus || Infinity
    //     minBatteryStatus = minBatteryStatus || 0
    //     expensesToReturn = gExpenses.filter(robot => robot.type.toLowerCase().includes(type.toLowerCase()) && robot.model.toLowerCase().includes(model.toLowerCase())
    //         && (robot.batteryStatus < maxBatteryStatus)
    //         && robot.batteryStatus > minBatteryStatus)
    // }
    return Promise.resolve([...expensesToReturn]);
}

function removeExpense(expenseId){
    const idx = gExpenses.findIndex((expense)=> expenseId === expense._id)
    gExpenses.splice(idx,1)
    if (!gExpenses.length) gExpenses = gDefaultExpenses.slice()
    storageService.store(STORAGE_KEY, gExpenses)
    return Promise.resolve()
}


function _loadExpenses() {
    let Expenses = storageService.load(STORAGE_KEY)
    if (!Expenses || !Expenses.length) Expenses = gDefaultExpenses 
    storageService.store(STORAGE_KEY, Expenses)
    return Expenses
}