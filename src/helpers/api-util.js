export const getAPI = async (url) => {
  const response = await fetch(url);
  return response.json();
};
