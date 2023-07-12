import { ModalEnter } from "../classes/ModalEnter.js";

export const buttonEnter = document.querySelector('.btnEnter');
export const enterPage = () => {
    buttonEnter.addEventListener("click", (e) => {
        const modalWindow = new ModalEnter;
        modalWindow.render();
    });
};