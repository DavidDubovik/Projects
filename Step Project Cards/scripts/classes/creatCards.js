import CreatPost from "./creatPost.js";

export default class UserPost {
    constructor(token) {
        this.token = token

    }

    async posts() {
        const f = await fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
        }).then(response => response.json())
            .then(response => {
                response.map(el => {
                    new UserPost().doctors(el)
                })

            })


    }

    doctors(post) {
        const {
            fullName,
            description,
            doctor,
            urgency,
            visitPurpose,
            id,
            lastVisit,
            pressure,
            age,
            bodyMassIndex,
            heartDiseases
        } = post
        const block = document.querySelector('.user-posts')
        const div = document.createElement('div')
        const divtwo = document.createElement('div')
        const btn = document.createElement('button')
        const showMore = document.createElement('button')
        showMore.innerText = 'Показати більше'
        showMore.style = '   position: absolute;bottom: 11px; font-size: 10px; right: 4px;  width: 100px;'
        div.classList.add('card')
        div.style = '  position: relative;  width: 18rem; overflow: hidden; height: 440px; margin: 0 10px;' 
        div.id = id
        divtwo.style = 'position: absolute; right: 13px;'
        divtwo.append(btn)
        div.append(divtwo)
        btn.innerHTML = '<span aria-hidden="true">&times;</span>'
        btn.classList.add = 'close'
        showMore.addEventListener('click', ()=>{

           if (showMore.textContent !== 'Сховати') {
            showMore.innerText = 'Сховати'
            div.style = '  position: relative;  width: 18rem; overflow: hidden; height: 100%; margin: 0 10px;' 
           }else{
            showMore.innerText = 'Показати більше'
                div.style = '  position: relative;  width: 18rem; overflow: hidden; height: 440px; margin: 0 10px;' 
           }
            
        })

        if (post.doctor === 'Dentist' || post.doctor === 'dentist') {
            div.innerHTML =
                `
         <div>
         <button type="button" class="close edit" aria-label="Close">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
         <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
       </svg>
       </button>
        
         </div>

  <img src="./img/photo_2023-01-08_17-08-33.jpg" class="card-img-top" alt="...">
    <div class="card-body">      
       <form action="#" method="get" class='edit-form'>
       <h5 class="card-title"> Лікарь: <select  id="autoSizingSelect" class="form-select select-urgency"    name="doctor"   >
       <option  value="${doctor}" hidden>${doctor}</option>
       <option value="dentist">Dentist</option>
       <option value="cardiologist">Cardiologist</option>
       <option value="therapist">Therapist</option>
     </select> </h5>
      <div>
      <p>Терміновість:</p><select class="form-select select-urgency" id="urgency" name="urgency" >
      <option  value="${urgency}" Hidden >${urgency} </option>
      <option  value="high"> high</option>
      <option value="normal">Normal</option>
      <option value="low" >Low</option>
    </select>
      </div>
      <div>
      <p>ПІБ:</p>
      <input type="text" name="fullName" value="${fullName}">
      </div>
      <div>
      <p>Мета візиту:</p>
      <input type="text" name="visitPurpose" value="${visitPurpose}">
      </div>
      <div>
      <p>Oпис:</p>
      <input type="text" name="description" value="${description}">
      </div>
      <p>Останій разу був:</p>
      <input type="text" name="lastVisit" value="${lastVisit}">
      </div>
  </form>`

        }
        if (post.doctor === 'Cardiologist' || post.doctor === 'cardiologist') {
            div.innerHTML =
                `
                <div>
                <button type="button" class="close edit" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
              </button>
                </div>
                
 <img src="./img/photo_2023-01-08_17-08-57.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      

 <form action="#" method="get" class='edit-form'>
 <h5 class="card-title"> Лікарь: <select  id="autoSizingSelect" class="form-select select-urgency"    name="doctor"   >
 <option  value="${doctor}" hidden>${doctor}</option>
 <option value="dentist">Dentist</option>
 <option value="cardiologist">Cardiologist</option>
 <option value="therapist">Therapist</option>
</select> </h5>
      <div>
      <p>Терміновість:</p><select class="form-select select-urgency" id="doctor" name="doctor" >
   
     <option  value="${urgency}" Hidden >${urgency} </option>
     <option  value="high"> high</option>
     <option value="normal">Normal</option>
     <option value="low" >Low</option>
   </select>
      </div>
      <div>
      <p>ПІБ:</p>
      <input type="text" name="fullName" value="${fullName}">
      </div>
      <div>
      <p>Мета візиту:</p>
      <input type="text" name="visitPurpose" value="${visitPurpose}">
      </div>
      <div>
      <p>Oпис:</p>
      <input type="text" name="description" value="${description}">
      </div>
      <div>
      <p>Нормальний артеріальний тиск:</p>
      <input type="text" name="pressure" value="${pressure}">
      </div>
       <div>
      <p>Маси тіла:</p>
      <input type="text" name="bodyMassIndex" value="${bodyMassIndex}">
      </div>
      <div>
      <p>Вік:</p>
      <input type="text" name="age" value="${age}"></div>   
         <div>
      <p>Xвороби серця:</p>
      <input type="text" name="heartDiseases" value="${heartDiseases}"></div>   
  </form>
    </div>`

        }
        if (post.doctor === 'Therapist' || post.doctor === 'therapist') {
            div.append(divtwo)
            div.innerHTML =
                ` 
                <div>
                <button type="button" class="close edit" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
              </button>
                </div>
  <img src="./img/img.png" class="card-img-top" alt="...">
    <div class="card-body">
      
      <form action="#" method="get" class='edit-form' name="loginForm">
      <h5 class="card-title"> Лікарь: <select  id="autoSizingSelect" class="form-select select-urgency"    name="doctor"   >
      <option  value="${doctor}" hidden>${doctor}</option>
      <option value="dentist">Dentist</option>
      <option value="cardiologist">Cardiologist</option>
      <option value="therapist">Therapist</option>
    </select> </h5>

     <p>Терміновість:</p><select class="form-select select-urgency" id="urgency" name="urgency" >
   
     <option  value="${urgency}" Hidden >${urgency} </option>
     <option  value="high"> high</option>
     <option value="normal">Normal</option>
     <option value="low" >Low</option>
   </select>
      
      <p>ПІБ:</p><input type="text" name="fullName" value="${fullName}">
  
      <p>Мета візиту:</p>
      <input type="text" name="visitPurpose" value="${visitPurpose}">
     
      <p>Oпис:</p>
      <input type="text" name="description" value="${description}">
      
      <p>Вік:</p>
      <input type="text" name="age" value="${age}">  
  </form>

   `

        }

        div.append(showMore)
        div.append(divtwo)
        block.append(div)
        this.edit(div)
        btn.addEventListener('click', () => {
            this.delete(div)

        })
    }

    async delete(el) {
        let elem = el
        const userToken = localStorage.getItem('token')
        await fetch(`https://ajax.test-danit.com/api/v2/cards/${el.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${userToken}`
            },
        })
        elem.remove()
    }


    edit(el) {
        const input = el.querySelectorAll('input')
        const select = el.querySelectorAll('select')
        const edit = document.createElement('button')
        const save = document.createElement('button')
        for (const iterator of select) {
            iterator.style = 'border: none; background: none;'
            iterator.setAttribute('disabled', 'disabled')
        }

        edit.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
      </svg> `
        edit.style = 'position: absolute;'
        el.append(edit)
        save.type = 'submit'
        save.innerText = 'Зберегти'
        for (const argument of input) {
            argument.setAttribute('disabled', 'disabled')
            argument.style = 'border: none; background: none;';
        }
        save.addEventListener('click', (even) => {
            for (const argument of input) {
                argument.setAttribute('disabled', 'disabled')
                argument.style = 'border: none; background: none;';
            }
            for (const iterator of select) {
                iterator.style = 'border: none; background: none;'
                iterator.setAttribute('disabled', 'disabled')
            }

            save.style = 'display: none;'
        })
        edit.addEventListener('click', () => {
            for (const argument of input) {
                argument.removeAttribute('disabled')
                argument.style = 'border: solid 1px black; ';
            }
            for (const iterator of select) {
                iterator.removeAttribute('disabled')
                iterator.style = 'border:solid 1px black; background: none;'

            }
            save.style = 'display: block;'
            form.append(save)
        })
        const form = el.querySelector('.edit-form')
        if (form !== null) {
            form.addEventListener('submit', (event) => {
                console.log(el.id)
                this.saveEdit(form, el.id)
                event.preventDefault()
            })
        }


    }

    saveEdit(form, id) {
        const {
            fullName = '',
            description = '',
            urgency = '',
            visitPurpose = '',
            lastVisit = '',
            doctor = '',
            pressure = '',
            age = '',
            bodyMassIndex = '',
            heartDiseases = ''
        } = form.elements
        const token = localStorage.getItem('token')

        // console.log(doctor.options[doctor.selectedIndex].text);
        fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                fullName: fullName.value,
                urgency: urgency.options[urgency.selectedIndex].text,
                visitPurpose: visitPurpose.value,
                description: description.value,
                doctor: doctor.options[doctor.selectedIndex].text,
                age: age.value,
                pressure: pressure.value,
                lastVisit: lastVisit.value,
                bodyMassIndex: bodyMassIndex.value,
                heartDiseases: heartDiseases.value,
            })
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }


}


