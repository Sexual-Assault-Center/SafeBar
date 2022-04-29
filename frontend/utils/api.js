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
export { getResources, getContacts, getAllFAQs }
