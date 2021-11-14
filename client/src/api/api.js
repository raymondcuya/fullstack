const apiURL = process.env.SERVER_API_URL || 'http://localhost:8000/v1';

export const apiCall = (url) => {
  console.log('apiURL/url', `${apiURL}${url}`);
  return fetch(`${apiURL}${url}`).then((response) => response.json());
};
