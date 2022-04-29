import URLS from '../constants/urls';

const urlBase = URLS.API_URL;

const getResources = () => fetch(`${urlBase}resources/`).then((res) => res.json());

const getContacts = () => fetch(`${urlBase}contacts/`).then((res) => res.json());

const getAllFAQs = () => fetch(`${urlBase}faqs/`).then((res) => res.json());

// const getSearch = (query) => {
//   // return fetch(`${urlBase}search?query=${query}/`) Placeholder until endpoint exists
//   return null;
// }

const getAllReportTypes = () => fetch(`${urlBase}reporttypes/`).then((res) => res.json());

const postReport = (reportObj) => fetch(`${urlBase}bar-report/`, {
  body: JSON.stringify(reportObj),
  method: 'POST',
  headers: { "Content-Type": "application/json" }
}).then(() => console.warn(JSON.stringify(reportObj)));

const getLanding = () => fetch(`${urlBase}landing/`).then((res) => res.json());

const getBarsByUid = () => fetch(`${urlBase}bars/`).then((res) => res.json());

const addFav = (favObj) => fetch(`${urlBase}bars/`, { body: JSON.stringify(favObj) }).then((res) => res.json());

export {
  getResources,
  getContacts,
  getAllFAQs,
  getLanding,
  postReport,
  getAllReportTypes,
  getAllFAQs,
  getBarsByUid,
  addFav
};
