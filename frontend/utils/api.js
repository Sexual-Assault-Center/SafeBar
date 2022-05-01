import URLS from '../constants/urls';

const urlBase = URLS.API_URL;

const getRequest = (path) => fetch(`${urlBase}${path}/`).then((res) => res.json());

const postRequest = (path, obj) => fetch(`${urlBase}${path}/`, {
  body: JSON.stringify(obj),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
});

// const getSearch = (query) => {
//   // return fetch(`${urlBase}search?query=${query}/`) Placeholder until endpoint exists
//   return null;
// }

export {
  getRequest, postRequest,
};
