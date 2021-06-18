const request = async (url, params) => {
  const result = await fetch(url, params);

  if (result.ok) {
    return await result.json();
  } else {
    throw result;
  }
};

const get = (url, params) => {
  const options = {
    method: "GET",
  };

  return request(url, { ...options, ...params });
};

const post = (url, params) => {
  const options = {
    method: "POST",
  };

  return request(url, { ...options, ...params });
};

const put = (url, params) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return request(url, { ...options, ...params });
};
export const requests = {
  request,
  get,
  post,
  put,
};
