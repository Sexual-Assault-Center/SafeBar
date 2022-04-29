import URLS from "../constants/urls";

const urlBase = URLS.API_URL;

const getResources = () => {
  return fetch(`${urlBase}resources/`).then((res) => res.json());
}

const getContacts = () => {
  return fetch(`${urlBase}contacts/`).then((res) => res.json());
}

const getAllFAQs = () => {
  return fetch(`${urlBase}faqs/`).then((res) => res.json());
}
export { getResources, getContacts }
const getSearch = (query) => {
  // return fetch(`${urlBase}search?query=${query}/`) Placeholder until endpoint exists
  return null;
}
export { getResources, getContacts, getSearch, getAllFAQs }
