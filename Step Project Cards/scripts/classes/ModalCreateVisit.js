import { Modal } from "./Modal.js";
import CreatPost from "./creatPost.js";

class ModalCreateVisit extends Modal {
  constructor() {
    super();

    this._fullName = document.createElement("input");
    this._doctor = document.createElement("select");
    this._visitPurpose = document.createElement("input");
    this._visitDescription = document.createElement("input");
    this._additionalInfoContainer = document.createElement("div");
    this._urgency = document.createElement("select");
    this._status = document.createElement("select");
    this._createVisitButton = document.createElement("button");
      this._checkDataWarningContainer = document.createElement("div");

    this._normalPressure = document.createElement("input");
    this._bodyMassIndex = document.createElement("input");
    this._heartDiseases = document.createElement("input");
    this._age = document.createElement("input");

    this._lastVisit = document.createElement("input");

  }

  createElements() {
    super.createElements();

    this._doctor.className = "form-select";
    this._doctor.id = "autoSizingSelect";
    this._doctor.innerHTML = `
        <option selected value="doctor">Doctor</option>
        <option value="dentist">Dentist</option>
        <option value="cardiologist">Cardiologist</option>
        <option value="therapist">Therapist</option>`;
    this._contentContainer.append(this._doctor);

    this._urgency.className = "form-select";
    this._urgency.id = "autoSizingSelect";
    this._urgency.innerHTML = `
        <option selected value="doctor">Urgency</option>
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>`;
    this._contentContainer.append(this._urgency);

    // this._status.className = "form-select";
    // this._status.id = "status";
    // this._status.innerHTML = `
    //     <option selected value="open">Open</option>
    //     <option value="done">Done</option>`;
    // this._contentContainer.append(this._status);


    this._fullName.type = "text";
    this._fullName.className = "form-control";
    this._fullName.placeholder = "First and last name";
    this._contentContainer.append(this._fullName);

    this._visitPurpose.type = "text";
    this._visitPurpose.className = "form-control";
    this._visitPurpose.placeholder = "Purpose of the visit";
    this._contentContainer.append(this._visitPurpose);

    this._visitDescription.type = "text";
    this._visitDescription.className = "form-control";
    this._visitDescription.placeholder = "Description of the visit";
    this._contentContainer.append(this._visitDescription);

    this._additionalInfoContainer.className =
      "modal-create__additional-info-container";
    this._contentContainer.append(this._additionalInfoContainer);

    this._createVisitButton.innerHTML = "Створити візит";
    this._createVisitButton.type = "button";
    this._createVisitButton.className =
      "btn btn btn-secondary modal-create__btn-create-visit";
    this._contentContainer.append(this._createVisitButton);

    this._doctor.addEventListener("change", () => {
      switch (this._doctor.value) {
        case "cardiologist":
          this._additionalInfoContainer.innerHTML = "";
          this._normalPressure.type = "text";
          this._normalPressure.className = "form-control";
          this._normalPressure.placeholder = "Your normal blood pressure";
          this._additionalInfoContainer.append(this._normalPressure);

          this._bodyMassIndex.type = "text";
          this._bodyMassIndex.className = "form-control";
          this._bodyMassIndex.placeholder = "Your body mass index";
          this._additionalInfoContainer.append(this._bodyMassIndex);

          this._age.type = "text";
          this._age.className = "form-control";
          this._age.placeholder = "Your age";
          this._additionalInfoContainer.append(this._age);

          this._heartDiseases.type = "text";
          this._heartDiseases.className = "form-control";
          this._heartDiseases.placeholder = "Your heart diseases";
          this._additionalInfoContainer.append(this._heartDiseases);
          break;

        case "dentist":
          this._additionalInfoContainer.innerHTML = "";
          this._lastVisit.type = "date";
          this._lastVisit.className = "form-control";
          this._lastVisit.placeholder = "Date of the last visit";
          this._additionalInfoContainer.append(this._lastVisit);
          this._additionalInfoContainer.insertAdjacentHTML(
            "beforeend",
            `<label>Date of the last visit</label>`
          );
          break;

        case "therapist":
          this._additionalInfoContainer.innerHTML = "";
          this._age.type = "text";
          this._age.className = "form-control";
          this._age.placeholder = "Your age";
          this._additionalInfoContainer.append(this._age);
          break;

        case "doctor":
          this._additionalInfoContainer.innerHTML = "";
          break;
      }


    });

    const checkInputs = () => {
      const inputs = this._mainContainer.querySelectorAll("input");
      let result;

      inputs.forEach((input) => {
        if (
          input.value !== undefined &&
          input.value !== null &&
          input.value !== ""
        ) {
          result = true;
          this.closeModal();
          return result;


        } else {
          this._checkDataWarningContainer.innerHTML = `<p style="color:red">Please, enter correct info!</p>`;
          this._additionalInfoContainer.append(
            this._checkDataWarningContainer
          );
        }
      });
    };

    this._createVisitButton.addEventListener("click", () => {
      checkInputs()
      new CreatPost(this._doctor, this._urgency, this._fullName, this._visitPurpose, this._visitDescription, this._lastVisit, this._visitPurpose, this._bodyMassIndex, this._age, this._heartDiseases,).creat()
    });
    
  }
}

export default ModalCreateVisit;