import { createSlice } from "@reduxjs/toolkit";
import data from "../mocData";
import { act } from "react";

const cart = createSlice({
  name: 'cart',
  initialState: [
    {id: 0, title: 'apple', count: 3},
    {id: 2, title: 'watermelon', count: 10}
  ],
  reducers: {
    addCount(state, action) {
      state[action.payload].count++;
    },
    addItem(state, action) {
      // 장바구니에 내가 주문하기 누른 상품이 있는지 없는지 판단. 판단기준은 어떤걸로? => 상품식별값이 id, 주문하기 누른 id가 장바구니에 있나 없나
      let index = state.findIndex(data => {
        return data.id == action.payload.id
      })
      if( index !== -1) {
        state[index].count++;
      } else {
        state.push(action.payload);
      }
    },
    removeItem(state, action) {
      const index = action.payload;
      state.splice(index, 1);
    }
  }

})
export const {addCount, addItem, removeItem} = cart.actions
export default cart;