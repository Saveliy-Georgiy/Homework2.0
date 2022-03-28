import {AppStoreType} from "../../h10/bll/store";

export type ThemeReducerActionsType = ChangeThemeType

type ChangeThemeType = ReturnType<typeof changeTheme>

const initState = {
    theme: 'some',
};

type initStateType = typeof initState

export const themeReducer = (state = initState, action: ThemeReducerActionsType): initStateType => {

    switch (action.type) {
        case "CURRENT_THEMES": {
            return {
                ...state,
                ...action.payload,
            };
        }
        default: return state;
    }
};

export const changeTheme = (theme: string)  => {
    return {
        type: "CURRENT_THEMES",
        payload: {
            theme,
        },
    } as const
}

export const selectTheme = (store: AppStoreType) => store.theme