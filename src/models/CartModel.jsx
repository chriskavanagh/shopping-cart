import { action } from "easy-peasy";

export default {
  // . . . CART PRODUCTS . . .
  items: [],
  quantity: 1,
  filteredList: [],
  cartCount: 0,
  // . . . ACTIONS . . .
  addQuantity: action((state, quantity) => {
    state.quantity = quantity;
  }),
  addfilteredList: action((state, list) => {
    state.filteredList = list;
    if (state.filteredList.length === 0) state.filteredList = [];
    else state.filteredList = list;
  }),
  addItem: action((state, item) => {
    let clone = [...state.items];
    let index = clone.findIndex(i => i.id === item.id);
    if (index !== -1) {
      clone[index].quantity =
        parseInt(clone[index].quantity) + parseInt(state.quantity);
      state.items = [...clone];
      state.quantity = 1;
    } else {
      item.quantity = state.quantity;
      state.items = [...state.items, item];
      state.quantity = 1;
    }
  })
};
