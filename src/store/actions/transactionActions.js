import {transactionService} from '../../services/transactionService'

export function loadTransactions(){
    return async (dispatch, getState) =>{
        try{
            const { filterBy } = getState().transactionModule
            const transactions = await transactionService.query(filterBy)
            dispatch({type : 'SET_TRANSACTIONS', transactions})

        }catch(err){
            console.log('err in loadTransactions >>',err);
        }
    }
}

export function removeTransaction(transactionId){
    return async (dispatch) =>{
        try{
            await transactionService.removeTransaction(transactionId)
            dispatch({type : 'REMOVE_TRANSACTION', transactionId})

        }catch(err){
            console.log('err in removeTransactions >>',err);
        }
    }
}

export function saveTransaction(transactionToSave){
    const type = transactionToSave._id ? 'UPDATE_TRANSACTION' : 'ADD_TRANSACTION'
    console.log('type >>',type);
    return async (dispatch) =>{
        try{
            const savedTransaction = await transactionService.save(transactionToSave)
            console.log('savedTransaction >>',savedTransaction);
            dispatch({type , transaction: savedTransaction})
        }catch(err){
            console.log('err in saveTransactions >>',err);
        }
    }
}