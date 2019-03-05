import fetch from "node-fetch";

/* eslint-disable import/prefer-default-export */
function goFetch({ endPoint, options = {}, absoluteEndPoint = null }) {
  const { AUTH0_API_BASEURL } = process.env;

  const opts = {
    // credentials: "include", // set this for Set-Cookie to work!
    ...options
  };
  return fetch(absoluteEndPoint || AUTH0_API_BASEURL + endPoint, opts)
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
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json();
  }
  return response.text();
}

export default goFetch;
