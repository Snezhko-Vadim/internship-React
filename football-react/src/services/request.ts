export default async function request(url:string, token:string) {
  let response = await fetch(url, {
    headers: {
      'X-Auth-Token': token,
    },
  });
  return await response.json();
}