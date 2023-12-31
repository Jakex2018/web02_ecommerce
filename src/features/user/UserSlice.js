import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from './UserService'
import { toast } from 'react-toastify'
export const registerUser = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
  try {
    return await authService.register(userData)
  } catch (err) {
    return thunkAPI.rejectWithValue(err)
  }
})

const initialState = {
  user: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true
    }).addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.createdUser = action.payload
      if (state.isSuccess === true) {
        toast.info('User Created')
      }
    }).addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.message = action.error
      if (state.isError === true) {
        toast.error(action.error)
      }
    })
  }
})

export default authSlice.reducer