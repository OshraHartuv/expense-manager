const INITIAL_STATE = {
    expenses: [],
    filterBy: null
}

export function expenseReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_EXPENSES':
            return {
                ...state,
                expenses: action.expenses
            }

        // case 'ADD_EXPENSE':
        //     return {
        //         ...state,
        //         expenses: [...state.expenses, action.expense]
        //     }

        case 'REMOVE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense._id !== action.expenseId)
            }

        // case 'UPDATE_EXPENSE':
        //     return {
        //         ...state,
        //         expenses: state.expenses.map(expense => expense._id === action.expense._id ? action.expense : expense)
        //     }
        // case 'SET_FILTER_BY':
        //     return {
        //         ...state,
        //         filterBy: {...action.filterBy}
        //     }

        default:
            return state;
    }
}