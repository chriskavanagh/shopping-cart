import { action, thunk } from "easy-peasy";
import axios from "axios";

const GROCERY_List = [
  { name: "Sliced Bacon", price: 2.28 },
  { name: "Dried Beans", price: 1.58 },
  { name: "Pasta", price: 2.01 },
  { name: "Ground Beef", price: 1.28 },
  { name: "Peanut Butter", price: 3.45 },
  { name: "Ketchup", price: 2.45 },
  { name: "Mustard", price: 1.15 }
];

export default GROCERY_List;
