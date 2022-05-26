export const httpClient = {
  get: (url: string) => {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  post: (url: string, body: any) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: getCookies().token,
        refreshToken: getCookies().refreshToken,
      },
      body: JSON.stringify(body),
    });
  },
};

const getCookies = (): { [key: string]: string } => {
  const cookies = document.cookie.split('; ');
  const result: { [key: string]: string } = {};
  cookies.forEach((cookie) => {
    const [key, value] = cookie.split('=');
    result[key] = value;
  });
  const { token, refreshToken } = result;
  return { token, refreshToken };
};

export const setCookies = (token: string, refreshToken: string) => {
  document.cookie = `token=${token};`;
  document.cookie = `refreshToken=${refreshToken};`;
};
