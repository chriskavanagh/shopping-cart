import { action } from "easy-peasy";

export default {
  // cart products
  items: [],
  quantity: 0,
  filteredList: [],
  //actions
  addQuantity: action((state, quantity) => {
    state.quantity = quantity;
    //console.log(`State-Quantity:${state.quantity}`);
  }),
  addfilteredList: action((state, list) => {
    state.filteredList = list;
    if (state.filteredList.length === 0) state.filteredList = [];
    else state.filteredList = list;
  }),
  add: action((state, item) => {
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
