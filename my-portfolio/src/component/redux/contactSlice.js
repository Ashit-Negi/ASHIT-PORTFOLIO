import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendContactMessage } from "./ContactApi";

export const sendMessage = createAsyncThunk(
  "contact/sendMessage",
  async (formData, { rejectWithValue }) => {
    try {
      return await sendContactMessage(formData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    name: "",
    email: "",
    message: "",
    number: "",
    loading: false,
    success: null,
    error: null,
  },

  reducers: {
    setField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        console.log("Message sending...");
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state) => {
        console.log("Message sent successfully!");
        state.loading = false;
        state.success = "Message sent successfully";
        state.name = "";
        state.email = "";
        state.message = "";
        state.number = "";
      })
      .addCase(sendMessage.rejected, (state, action) => {
        console.log("Message failed to send:", action.payload);
        state.loading = false;
        state.error = action.payload || "Failed to send message";
      });
  },
});

export const { setField } = contactSlice.actions;
export default contactSlice.reducer;
