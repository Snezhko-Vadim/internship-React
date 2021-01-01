export default async function request(url, token) {
  let response = await fetch(url, {
    headers: {
      'X-Auth-Token': token,
    },
  });
  return await response.json();
}