const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { KEY_PIXABBAY: KEY } = process.env;

const fetchApi = (name, page) => {
  const URL = `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = fetch(URL)
    .then((r) => r.json())
    .catch(console.error());
  return response;
};

module.exports = fetchApi;
