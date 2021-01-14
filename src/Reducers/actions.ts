
import FormType from '../Types/FormType';
import SET_ENTRY, { SET_CURRENT_ENTRY } from './ActionTypes'

export const setEntry = (entries: FormType[]) => ({
    type:SET_ENTRY,
    entries,
  });
export const setCurrentEntry = (currentEntry:FormType)=>({
  type:SET_CURRENT_ENTRY,
  currentEntry,
});
  