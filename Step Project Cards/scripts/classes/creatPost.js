import UserPost from "./creatCards.js"


export default class CreatPost {
    constructor(doctor, urgency, fullName, visitPurpose, description, lastVisit, pressure, bodyMassIndex, age, heartDiseases) {

        this.doctor = doctor.value
        this.urgency = urgency.value
        // this.status = status.value
        this.fullName = fullName.value
        this.visitPurpose = visitPurpose.value
        this.description = description.value
        this.lastVisit = lastVisit.value
        this.pressure = pressure.value
        this.bodyMassIndex = bodyMassIndex.value
        this.age = age.value
        this.heartDiseases = heartDiseases.value
        this.token = localStorage.getItem('token')


    }

    creat() {
        if (
            this.fullName !== "" &&
            this.visitPurpose !== ""
        ) {


            fetch("https://ajax.test-danit.com/api/v2/cards", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify({
                    fullName: this.fullName,
                    urgency: this.urgency,
                    // status: this.status,
                    visitPurpose: this.visitPurpose,
                    description: this.description,
                    doctor: this.doctor,
                    age: this.age,
                    pressure: this.pressure,
                    lastVisit: this.lastVisit,
                    bodyMassIndex: this.bodyMassIndex,
                    heartDiseases: this.heartDiseases

                })
            })
                .then(response => response.json())
                .then(response => {
                    new UserPost().doctors(response)
                    // new UserPost().cardiologist(response)
                    // new UserPost().therapist(response)
                    console.log(response)


                })
        }
    }

}