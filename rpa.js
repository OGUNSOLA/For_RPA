/** @format */

const add = document.getElementsByClassName("add");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const gender = document.getElementById("gender");
const homePhone = document.getElementById("home");
const workPhone = document.getElementById("work");
const personalEmail = document.getElementById("personal");
const workEmail = document.getElementById("workEmail");
const table = document.getElementById("customerData");
let sn = 1;

document.addEventListener("click", (e) => {
  let customerID = Math.floor(Math.random() * 1000000 + 1);
  const newRow = document.createElement("tr");
  const snTd = document.createElement("td");
  const fnTd = document.createElement("td");
  const lnTd = document.createElement("td");
  const genderTd = document.createElement("td");
  const addTd = document.createElement("td");
  const cityTd = document.createElement("td");
  const stateTd = document.createElement("td");
  const hmphoneTd = document.createElement("td");
  const wkphoneTd = document.createElement("td");
  const pEmailTd = document.createElement("td");
  const wEmailTd = document.createElement("td");
  const cusIDTd = document.createElement("td");
  if (e.target.className === "add") {
    snTd.append(sn);
    fnTd.append(firstName.value);
    lnTd.append(lastName.value);
    genderTd.append(gender.value);
    addTd.append(address.value);
    cityTd.append(city.value);
    stateTd.append(state.value);
    hmphoneTd.append(homePhone.value);
    wkphoneTd.append(workPhone.value);
    pEmailTd.append(personalEmail.value);
    wEmailTd.append(workEmail.value);
    cusIDTd.append(customerID);
    newRow.append(
      snTd,
      fnTd,
      lnTd,
      genderTd,
      addTd,
      cityTd,
      stateTd,
      hmphoneTd,
      wkphoneTd,
      pEmailTd,
      wEmailTd,
      cusIDTd
    );
    sn += 1;
    table.append(newRow);
  }
});
