const request = async (path, method, body = {}, headers = {}) => {
  if (method === "GET") {
    return await fetch(path, {
      method,
      headers: { "Content-Type": "application/json", ...headers },
      credentials: "include"
    });
  }
  return await fetch(path, {
    method,
    headers: { "Content-Type": "application/json", ...headers },
    credentials: "include",
    body: JSON.stringify(body)
  });
};
export {
  request as r
};
