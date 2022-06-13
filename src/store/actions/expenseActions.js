import {expenseService} from '../../services/expenseService'

export function loadExpenses(){
    return async (dispatch, getState) =>{
        try{
            const { filterBy } = getState().expenseModule
            const expenses = await expenseService.query(filterBy)
            dispatch({type : 'SET_EXPENSES', expenses})

        }catch(err){
            console.log('err in loadExpenses >>',err);
        }
    }
}

export function removeExpense(expenseId){
    return async (dispatch) =>{
        try{
            await expenseService.removeExpense(expenseId)
            dispatch({type : 'REMOVE_EXPENSE', expenseId})

        }catch(err){
            console.log('err in removeExpenses >>',err);
        }
    }
}

export function saveExpense(expenseToSave){
    const type = expenseToSave._id ? 'UPDATE_EXPENSE' : 'ADD_EXPENSE'
    console.log('type >>',type);
    return async (dispatch) =>{
        try{
            const savedExpense = await expenseService.save(expenseToSave)
            console.log('savedExpense >>',savedExpense);
            dispatch({type , expense: savedExpense})
        }catch(err){
            console.log('err in saveExpenses >>',err);
        }
    }
}