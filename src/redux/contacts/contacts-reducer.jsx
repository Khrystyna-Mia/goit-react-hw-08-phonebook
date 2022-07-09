import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './contacts-actions';

export const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

/* for me (AsyncThunk) */

// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import { filterContacts } from './contacts-actions';
// import contactsOperations from './contacts-operations';

// const {
//     fetchContacts,
//     addContact,
//     deleteContact,
// } = contactsOperations;

// const itemsReducer = createReducer([], {
//     [fetchContacts]: (_, { payload }) => payload,
//     [addContact]: (state, { payload }) => [payload, ...state],
//     [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filterReducer = createReducer('', {
//     [filterContacts]: (_, { payload }) => payload,
// });

// const contactsReducer = combineReducers({
//     items: itemsReducer,
//     filter: filterReducer,
// });

// export default contactsReducer;
