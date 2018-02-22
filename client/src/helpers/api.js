import { api, getApiPromise } from '../helpers/api';

export function api(method, data, cb) {
  const promise = getApiPromise(method, data);

  promise.then(json => {
    if (typeof cb === 'function') {
      cb(json);
    }
  })
  .catch(err => {
    console.log('error:', err);
  });
}

export function getApiPromise(method, data) {
  let url = 'http://localhost:3000/todos';
  if (data && ['DELETE', 'PUT'].indexOf(method) !== -1) {
    url += `/${data.id}`;
  }

  const options = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  if (data) {
    options.body = JSON.stringify({
      data,
    });
  }

  return fetch(url, options)
  .then(response => {
    if (response.status >= 400) {
      return response.json().then(err => Promise.reject(err.message));
    }

    return response.json();
  })
};
