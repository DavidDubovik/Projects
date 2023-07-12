import getToken from "../api/getToken.js";
import { getAllCards } from "../api/getAllCards.js";

export const confirmF = async (newLogin, newPass) => {
  const token = await getToken(newLogin, newPass);
  if (localStorage.getItem("token")) {
    return await getAllCards();
  }
};

export const cards = await confirmF(
  localStorage.getItem("email"),
  localStorage.getItem("password")
);

export let arrayVisits = cards;
