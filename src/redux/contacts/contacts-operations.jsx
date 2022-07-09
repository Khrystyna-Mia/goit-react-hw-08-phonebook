/* for me (AsyncThunk) */

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';

// const fetchContacts = createAsyncThunk(
//     'contacts/fetchContacts',
//     async (_, { rejectWithValue }) => {
//         try {
//             const { data } = await axios.get('/contacts');
//             return data;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     },
// );

// const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async (contact, { rejectWithValue }) => {
//         try {
//             const { data } = await axios.post('/contacts', contact);
//             return data;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     },
// );

// const deleteContact = createAsyncThunk(
//     'contact/deleteContact',
//     async (contactId, { rejectWithValue }) => {
//         try {
//             await axios.delete(`/contacts/&{contactId}`);
//             return contactId;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     },
// );

// const contactsOperations = {
//     fetchContacts,
//     addContact,
//     deleteContact,
// };

// export default contactsOperations;
