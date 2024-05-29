const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

const modified = document.querySelector("#lastModified");
const lastModifiedDate = new Date(document.lastModified);

const yearModified = lastModifiedDate.getFullYear();
const monthModified = String(lastModifiedDate.getMonth() + 1).padStart(2, "0");
const dayModified = String(lastModifiedDate.getDate()).padStart(2, "0");

modified.innerHTML = `Last Update: ${yearModified}/${monthModified}/${dayModified}`;