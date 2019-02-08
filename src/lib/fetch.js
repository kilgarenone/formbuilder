/* eslint-disable import/prefer-default-export */
function goFetch(endPoint, options = {}) {
  const { API_BASEURL } = process.env;

  const opts = {
    credentials: "include", // set this for Set-Cookie to work!
    ...options
  };
  return fetch(API_BASEURL + endPoint, opts)
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => {
      console.log("Error fetching", error);
    });
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

export default goFetch;
