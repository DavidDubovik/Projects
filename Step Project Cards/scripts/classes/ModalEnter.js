import {Modal} from "./Modal.js";
import {buttonEnter} from "../classes/enterPage.js";
import UserPost from "./creatCards.js";



export class ModalEnter extends Modal {
    constructor(confirmF) {
        super();
        this.form = document.createElement('form')
        this.input = document.createElement('input')
        this.inputPassword = document.createElement('input')
        this.confirmBttn = document.createElement('button')
        this.confirmF = confirmF
    }

    createElements() {
        super.createElements()

        this.form.insertAdjacentHTML('beforeend', '<label>Email</label>')
        this.input.classList.add('login')
        this.form.append(this.input)

        this.form.insertAdjacentHTML('beforeend', '<label>Password</label>')
        this.inputPassword.type = 'password'
        this.inputPassword.classList.add('password')

        this.form.append(this.inputPassword)
        this._contentContainer.append(this.form)
        this._buttonContainer.append(this.confirmBttn)
        this.confirmBttn.innerText = 'Підтвердити';
        this.confirmBttn.classList.add('modal__confirm-btn');
        this.confirmBttn.classList.add('mt-4');

        this.confirmBttn.addEventListener('click', () => {
            confirmF(this.input.value, this.inputPassword.value)
            this.closeModal()
        })

    }
}


const confirmF = async (newLogin, newPass) => {
    await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: newLogin,
            password: newPass
        })
    })
        .then(response => response.text())
        .then(data => {
            const tok = data

            if (data !== "Incorrect username or password"  && newLogin !== "" && newPass !== "" ) {


                buttonEnter.classList.add('invisible');
                const btnExit = document.querySelector('.btnExitPage').classList.remove('invisible');
                const btnCreateVisit = document.querySelector('.btnCreateVisit').classList.remove('invisible');
                localStorage.setItem('token', data)
            }
            else {
                alert("Введите правильный логин и пароль!")
            }
            new UserPost(data).posts()

        });

}

0