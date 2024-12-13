import { createSlice } from '@reduxjs/toolkit';
import { rootReducer } from 'app/store/lazyLoadedSlices';

const initialState = { selectedItemId: null };
/**
 * The File Manager App slice.
 */
export const fileManagerAppSlice = createSlice({
	name: 'fileManagerApp',
	initialState,
	reducers: {
		setSelectedItemId: (state, action) => {
			state.selectedItemId = action.payload;
		},
		resetSelectedItemId: (state) => {
			state.selectedItemId = initialState.selectedItemId;
		}
	},
	selectors: {
		selectSelectedItemId: (state) => state.selectedItemId
	}
});
/**
 * Lazy load
 * */
rootReducer.inject(fileManagerAppSlice);
const injectedSlice = fileManagerAppSlice.injectInto(rootReducer);
export const { setSelectedItemId, resetSelectedItemId } = fileManagerAppSlice.actions;
export const { selectSelectedItemId } = injectedSlice.selectors;
export default fileManagerAppSlice.reducer;
