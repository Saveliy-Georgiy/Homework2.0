import {AppStoreType} from "./store"

const LOADING = 'LOADING'

type ActionTypes = LoadingType

type LoadingState = typeof initState

const initState = {
    isLoading: false
}

export type LoadingType = ReturnType<typeof loading>

export const loadingReducer = (state = initState, action: ActionTypes): LoadingState => {
    switch (action.type) {
        case LOADING: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export const loading = (isLoading: boolean) => {
    return {
        type: LOADING,
        payload: {isLoading,},
    }
}

export const selectLoading = (store: AppStoreType) => store.loading