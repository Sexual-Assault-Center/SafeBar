import URLS from "../constants/urls";

const urlBase = URLS.API_URL;

const getResources = () => {
  return fetch(`${urlBase}resources/`).then((res) => res.json());
}

const getSingleResource = (id) => {
  return fetch(`${urlBase}resource`).then((res) => res.json());
}

const getAllFAQs = () => {
  return fetch(`${urlBase}faqs`).then((res) => res.json());
}
export { getResources, getSingleResource, getAllFAQs }
