import { SET_CURRENT_ENTRY } from "./ActionTypes";
import FormType, { forminputReset } from "../Types/FormType";
import SET_ENTRY from './ActionTypes'
export type ApplicationState = {
    entries: FormType[],
    currentEntry:FormType,
}
const initialState = {
    entries: [],
    currentEntry:forminputReset,
};


export default function entriesReducer(
    state: ApplicationState = initialState,
    action: any
): ApplicationState {
    switch (action.type) {
        case SET_ENTRY:
            return { ...state, entries:action.entries } 
        case SET_CURRENT_ENTRY:
            return { ...state, currentEntry:action.currentEntry}
        default:
            return state
    }
}