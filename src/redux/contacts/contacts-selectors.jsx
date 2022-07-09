/* for me (AsyncThunk) */

// import { createSelector } from '@reduxjs/toolkit';

// export const getContacts = state => state.contacts.items;
// export const getFilter = state => state.contacts.filter;
// export const getLoading = state => state.contacts.loading;

// export const getVisibleContacts = createSelector(
//     [getContacts, getFilter],
//     (contacts, filter) => {
//         const normalizeFilter = filter.toLowerCase();
//         return contacts.filter(({ name }) =>
//         name.toLowerCase().includes(normalizeFilter),
//         );
//     },
// );

// export const getContactsNames = createSelector([getContacts], contacts => {
//     return contacts.reduce((allNames, { name }) => {
//         allNames.push(name.toLowerCase());
//         return allNames;
//     }, []);
// });
