import { action, thunk } from "easy-peasy";
import axios from "axios";

const GROCERY_List = [
  { id: 1, name: "Sliced Bacon", price: 2.28, quantity: 1 },
  { id: 2, name: "Dried Beans", price: 1.58, quantity: 1 },
  { id: 3, name: "Pasta", price: 2.01, quantity: 1 },
  { id: 4, name: "Ground Beef", price: 1.28, quantity: 1 },
  { id: 5, name: "Peanut Butter", price: 3.45 },
  { id: 6, name: "Ketchup", price: 2.45, quantity: 1 },
  { id: 7, name: "Mustard", price: 1.15, quantity: 1 }
];

export default GROCERY_List;
