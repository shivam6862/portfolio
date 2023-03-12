export const postWithCredentials = async (url, bodyData) => {
  console.log(url);
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
