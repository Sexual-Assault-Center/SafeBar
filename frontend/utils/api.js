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

const addFav = (uid, barId) => fetch(`${urlBase}favorite/new-favorite/${uid}/${barId}/`, {
  body: JSON.stringify({}),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
});
const removeFavorite = (uuid) => fetch(`${urlBase}favorite/by-uuid/${uuid}/`, {
  body: JSON.stringify({}),
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getFavsByUid = (uid) => fetch(`${urlBase}favorite/${uid}/`).then((res) => res.json());

export {
  getRequest, postRequest, addFav, getFavsByUid, removeFavorite,
};
