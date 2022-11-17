// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { addContact, deleteContact, fetchContacts } from './operations';

// const contactsInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const actions = [addContact, deleteContact, fetchContacts];

// const handleFetchContacts = (state, action) => {
//   state.items = action.payload;
// };

// const handleAddContact = (state, action) => {
//   state.items.push(action.payload);
// };
// const handleDeleteContact = (state, action) => {
//   const index = state.items.findIndex(
//     contact => contact.id === action.payload.id
//   );
//   state.items.splice(index, 1);
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.fulfilled, handleFetchContacts)
//       .addCase(addContact.fulfilled, handleAddContact)
//       .addCase(deleteContact.fulfilled, handleDeleteContact)
//       .addMatcher(
//         isAnyOf(...actions.map(action => action.fulfilled)),
//         state => {
//           state.isLoading = false;
//           state.error = null;
//         }
//       )
//       .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
//         state.isLoading = true;
//       })
//       .addMatcher(
//         isAnyOf(...actions.map(action => action.rejected)),
//         (state, action) => {
//           state.isLoading = false;
//           state.error = action.payload;
//         }
//       );
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
