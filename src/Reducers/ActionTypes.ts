import { Middleware } from "redux";
import { createLogger } from "redux-logger";
import FormType from "../Types/FormType";

export const SET_ENTRY = 'SET_ENTRY';
export const SET_CURRENT_ENTRY = 'SET_CURRENT_ENTRY';
const SharedActions = {

};
export interface SetEntryAction{ 
    type: typeof SET_ENTRY, 
    entries: FormType[],
  }
  export interface SetCurrentEntryAction { 
    type: typeof SET_CURRENT_ENTRY, 
    currentEntry: FormType,
  }
  

export type ActionType = SetEntryAction
| SetCurrentEntryAction;

export const middleware: Middleware[] = [createLogger({ collapsed: true, diff: true })];

export default SharedActions;