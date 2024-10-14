import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addCategory,
  deleteCategory,
  fetchCategories,
  updateCategory,
} from '../../utils/categoryApi';

// Thunk to fetch categories
export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (token, thunkAPI) => {
    try {
      const response = await fetchCategories(token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Thunk to add a category
export const createCategory = createAsyncThunk(
  'categories/createCategory',
  async ({ categoryData, token }, thunkAPI) => {
    try {
      const response = await addCategory(categoryData, token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Thunk to update a category
export const modifyCategory = createAsyncThunk(
  'categories/modifyCategory',
  async ({ categoryId, categoryData, token }, thunkAPI) => {
    try {
      const response = await updateCategory(categoryId, categoryData, token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Thunk to delete a category
export const removeCategory = createAsyncThunk(
  'categories/removeCategory',
  async ({ categoryId, token }, thunkAPI) => {
    try {
      const response = await deleteCategory(categoryId, token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add the new category
      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Handle category update
      .addCase(modifyCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(
          (cat) => cat.id === action.payload.id
        );
        if (index !== -1) {
          state.categories[index] = action.payload; // Update the category in state
        }
      })
      .addCase(modifyCategory.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Handle category deletion
      .addCase(removeCategory.fulfilled, (state, action) => {
        // Assuming action.payload is the deleted category ID
        state.categories = state.categories.filter(
          (category) => category.id !== action.meta.arg.categoryId
        );
      })
      .addCase(removeCategory.rejected, (state, action) => {
        state.error = action.error.message; // Handle the error
      });
  },
});

export default categorySlice.reducer;
