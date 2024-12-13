import { createSlice } from '@reduxjs/toolkit';
import { rootReducer } from 'app/store/lazyLoadedSlices';

const initialState = {
	selectedContactId: '',
	open: false
};
/**
 * The slice for the contacts.
 */
export const messengerPanelSlice = createSlice({
	name: 'chatPanel',
	initialState,
	reducers: {
		setSelectedContactId: (state, action) => {
			state.selectedContactId = action.payload;
		},
		removeSelectedContactId: (state) => {
			state.selectedContactId = '';
		},
		toggleChatPanel: (state) => {
			state.open = !state;
		},
		openChatPanel: (state) => {
			state.open = true;
		},
		closeChatPanel: (state) => {
			state.open = false;
		}
	},
	selectors: {
		selectSelectedContactId: (state) => state.selectedContactId,
		selectChatPanelOpen: (state) => state.open
	}
});
/**
 * Lazy load
 * */
rootReducer.inject(messengerPanelSlice);
const injectedSlice = messengerPanelSlice.injectInto(rootReducer);
export const { setSelectedContactId, openChatPanel, toggleChatPanel, removeSelectedContactId, closeChatPanel } =
	messengerPanelSlice.actions;
export const { selectSelectedContactId, selectChatPanelOpen } = injectedSlice.selectors;
export default messengerPanelSlice.reducer;
