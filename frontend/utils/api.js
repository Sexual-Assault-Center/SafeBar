import URLS from '../constants/urls';

const urlBase = URLS.API_URL;

const getResources = () => fetch(`${urlBase}resources/`).then((res) => res.json());

const getContacts = () => fetch(`${urlBase}contacts/`).then((res) => res.json());

const getAllFAQs = () => fetch(`${urlBase}faqs/`).then((res) => res.json());

const getAllBars = () => fetch(`${urlBase}bars/`).then((res) => res.json());

// const getSearch = (query) => {
//   // return fetch(`${urlBase}search?query=${query}/`) Placeholder until endpoint exists
//   return null;
// }

const getLanding = () => fetch(`${urlBase}landing/`).then((res) => res.json());

export {
  getResources, getContacts, getAllFAQs, getLanding, getAllBars,
};
