import { transactionService } from "../../services/transactionService"
import { getDateStr } from "../../services/utilService"

const INITIAL_STATE = {
    transactions: [],
    filterBy: null
}

export function transactionReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_TRANSACTIONS':
            return {
                ...state,
                transactions: action.transactions
            }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.transaction]
            }

        case 'REMOVE_TRANSACTION':
          
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.transactionId),
            }

        case 'UPDATE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.map(transaction => transaction._id === action.transaction._id ? action.transaction : transaction)
            }
            
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: {...action.filterBy}
            }

        default:
            return state;
    }
}