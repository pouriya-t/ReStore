import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../app/api/agent";

const initialState = {
  basket: null,
  status: "idle",
};

export const addBasketItemAsync = createAsyncThunk(
  "basket/addBasketItemAsync",
  async ({ productId, quantity = 1 }, thunkAPI) => {
    try {
      return await agent.Basket.addItem(productId, quantity);
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const removeBasketItemAsync = createAsyncThunk(
  "basket/removeBasketItemAsync",
  async ({ productId, quantity = 1 }, thunkAPI) => {
    try {
      return await agent.Basket.removeItem(productId, quantity);
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.basket = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addBasketItemAsync.pending, (state, action) => {
      state.status = "pendingAddItem" + action.meta.arg.productId;
    });
    builder.addCase(addBasketItemAsync.fulfilled, (state, action) => {
      state.basket = action.payload;
      state.status = "idle";
    });
    builder.addCase(addBasketItemAsync.rejected, (state, action) => {
      state.status = "idle";
      console.log(action.payload);
    });
    builder.addCase(removeBasketItemAsync.pending, (state, action) => {
      action.meta.arg.quantity > 1
        ? (state.status = "pendingRemoveItem" + action.meta.arg.productId)
        : (state.status = "pendingRemoveOneItem" + action.meta.arg.productId);
    });
    builder.addCase(removeBasketItemAsync.fulfilled, (state, action) => {
      const { productId, quantity } = action.meta.arg;
      const itemIndex = state.basket.items.findIndex(
        (i) => i.productId === productId
      );
      if (itemIndex === -1 || itemIndex === undefined) return;
      state.basket.items[itemIndex].quantity -= quantity;
      if (state.basket.items[itemIndex].quantity === 0)
        state.basket.items.splice(itemIndex, 1);
      state.status = "idle";
    });
    builder.addCase(removeBasketItemAsync.rejected, (state, action) => {
      state.status = "idle";
      console.log(action.payload);
    });
  },
});

export const { setBasket } = basketSlice.actions;
