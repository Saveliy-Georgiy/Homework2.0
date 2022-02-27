import {UserType} from "../HW8";

type ActionTypes = ReturnType<typeof sortUpAC> | ReturnType<typeof sortDownAC> | ReturnType<typeof checkAgeAC>

export const homeWorkReducer = (state: Array<UserType>, action: ActionTypes): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
             if (action.payload === 'up') {
                 return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
             } else if (action.payload === 'down') {
                return [...state.sort((a, b) => a.name > b.name ? -1 : 1)]
             } else {
                 return state
             }
        }
        case 'check': {
            return state.filter(p => p.age >= action.payload)
        }
        default: return state
    }
}

export const sortUpAC = (up: string) => {
    return {
        type: 'sort',
        payload: up
    } as const
}

export const sortDownAC = (down: string) => {
    return {
        type: 'sort',
        payload: down
    } as const
}

export const checkAgeAC = (age: number) => {
    return {
        type: 'check',
        payload: age
    } as const
}