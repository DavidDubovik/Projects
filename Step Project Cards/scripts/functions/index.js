"use strict";
// import
import getToken from "../api/getToken.js";
import { Modal } from "../classes/Modal.js";
import { ModalEnter } from "../classes/ModalEnter.js";
import ModalCreateVisit from "../classes/ModalCreateVisit.js"
import { enterPage } from "../classes/enterPage.js";
// import { searchCards } from "./filter.js";

enterPage();

const buttonCreateVisit = document.querySelector('.btnCreateVisit');
const btnExit = document.querySelector('.btnExitPage');

btnExit.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.reload();
})

buttonCreateVisit.addEventListener("click", (e) => {

    const modelWindow = new ModalCreateVisit();
    modelWindow.render();

});
const searchSubmitButton = document.querySelector("#submit-search");
searchSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    // searchCards();
  });
