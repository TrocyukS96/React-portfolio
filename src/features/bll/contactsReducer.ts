import {Dispatch} from 'react';
import {contactsApi} from "../dal/contactsAPI";


const initialState = {
    status:'loading',
    error: null as string | null,
}

export const contactsReducer = (state: AppInitialStateType = initialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

//actionCreators
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)


//thunks
export const sendMessage = (contactsData:any) => async (dispatch: Dispatch<AppActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res = await contactsApi.sendFeedBack(contactsData)
        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        console.log(e)
    }
}

//type
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type AppInitialStateType = typeof initialState

export type AppActionsType = any







