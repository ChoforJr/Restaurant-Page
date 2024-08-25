export const havenContact = document.createElement("div");
havenContact.classList.add("havenContact");

const havenContactTitle = document.createElement("h2");
havenContactTitle.textContent = "Burger Haven Contact Page";
havenContact.appendChild(havenContactTitle);


const contactPage = document.createElement("div");
const address = document.createElement("h3");
address.textContent = "Address:";

const addressUl = document.createElement("ul");

const addressL1 = document.createElement("li");
addressL1.textContent = "- [Restaurant Address]";

const addressL2 = document.createElement("li");
addressL2.textContent = "- [City, State, ZIP Code]";

addressUl.appendChild(addressL1);
addressUl.appendChild(addressL2);

contactPage.appendChild(address);
contactPage.appendChild(addressUl);


const phoneNumber = document.createElement("h3");
phoneNumber.textContent = "Phone Number:";

const phoneNumberUl = document.createElement("ul");

const phoneNumberL1 = document.createElement("li");
addressL1.textContent = "- [Restaurant Phone Number]";

phoneNumberUl.appendChild(phoneNumberL1);

contactPage.appendChild(phoneNumber);
contactPage.appendChild(phoneNumberUl);


const email = document.createElement("h3");
email.textContent = "Email:";

const emailUl = document.createElement("ul");

const emailL1 = document.createElement("li");
emailL1.textContent = "- [Restaurant Email Address]";

emailUl.appendChild(emailL1);

contactPage.appendChild(email);
contactPage.appendChild(emailUl);


const socialMedia = document.createElement("h3");
socialMedia.textContent = "Social Media:";

const socialMediaUl = document.createElement("ul");

const socialMediaL1 = document.createElement("li");
socialMediaL1.textContent = "- [Facebook Link]";
const socialMediaL2 = document.createElement("li");
socialMediaL2.textContent = "- [Instagram Link]";
const socialMediaL3 = document.createElement("li");
socialMediaL3.textContent = "- [Twitter Link]";

socialMediaUl.appendChild(socialMediaL1);
socialMediaUl.appendChild(socialMediaL2);
socialMediaUl.appendChild(socialMediaL3);

contactPage.appendChild(socialMedia);
contactPage.appendChild(socialMediaUl);


const hoursOfOperation = document.createElement("h3");
hoursOfOperation.textContent = "Hours of Operation:";

const hoursOfOperationUl = document.createElement("ul");

const hoursOfOperationL1 = document.createElement("li");
hoursOfOperationL1.textContent = "- [Monday-Friday] [Hours]";
const hoursOfOperationL2 = document.createElement("li");
hoursOfOperationL2.textContent = "- [Saturday-Sunday] [Hours]";

hoursOfOperationUl.appendChild(hoursOfOperationL1);
hoursOfOperationUl.appendChild(hoursOfOperationL2);

contactPage.appendChild(hoursOfOperation);
contactPage.appendChild(hoursOfOperationUl);


const reservations = document.createElement("h3");
reservations.textContent = "Reservations:";

const reservationsUl = document.createElement("ul");

const reservationsL1 = document.createElement("li");
reservationsL1.textContent = "- To make a reservation, please call us at [Restaurant Phone Number] or visit our website to book online.";

reservationsUl.appendChild(reservationsL1);

contactPage.appendChild(reservations);
contactPage.appendChild(reservationsUl);


havenContact.appendChild(contactPage);