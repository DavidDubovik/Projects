// import { arrayVisits } from "./getCardsArray.js";
// import UserPost from "../classes/creatCards.js"
// import CreatPost from "../classes/creatPost.js";
const container = document.querySelector(".user-posts");
const selectUrgency = document.querySelector(".select-urgency");
const selectStatus = document.querySelector(".select-status");
const searchInput = document.querySelector("#search-input");
// console.log(arrayVisits);
console.log(searchInput);

// export const searchCards = () => {
//   container.innerHTML = "";
//
//   if(selectUrgency.value === "all" && selectStatus.value === "all"){
//     const filtredArrayVisits = arrayVisits.filter(({fullName, description}) => fullName.includes(searchInput.value) || description.includes(searchInput.value))
//     console.log(filtredArrayVisits)
//     new CreatPost.creat(filtredArrayVisits)
//   }
//
//   else if(selectUrgency.value === "all" && selectStatus.value !== "all"){
//     const filtredArrayVisits = arrayVisits.filter(({fullName, description, status}) => (fullName.includes(searchInput.value) || description.includes(searchInput.value)) && (status.includes(selectStatus.value)))
//     console.log(filtredArrayVisits)
//     new CreatPost.creat(filtredArrayVisits)
//   }
//
//   else if(selectUrgency.value !== "all" && selectStatus.value === "all"){
//     const filtredArrayVisits = arrayVisits.filter(({fullName, description, urgency}) => (fullName.includes(searchInput.value) || description.includes(searchInput.value)) && (urgency.includes(selectUrgency.value)))
//     console.log(filtredArrayVisits)
//     new CreatPost.creat(filtredArrayVisits)
//   }
//
//   else{
//     const filtredArrayVisits = arrayVisits.filter(({fullName, description, urgency, status}) => (fullName.includes(searchInput.value) || description.includes(searchInput.value)) && (urgency.includes(selectUrgency.value)) && (status.includes(selectStatus.value)))
//     console.log(filtredArrayVisits)
//     new CreatPost.creat(filtredArrayVisits)
//   }
// }

