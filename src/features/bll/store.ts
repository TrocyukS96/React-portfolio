import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { contactsReducer } from './contactsReducer';

const rootReducer = combineReducers({
    contacts: contactsReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown,any>