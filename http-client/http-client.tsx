export const httpClient = {
  get: (url: string) => {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token: getCookies().token,
        refreshToken: getCookies().refreshToken,
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

export const getCookies = (): { [key: string]: string } => {
  if (typeof window === 'undefined') {
    return {};
  }
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
  document.cookie = `token=${token}; path=/;`;
  document.cookie = `refreshToken=${refreshToken}; path=/;`;
};

export const logout = (): void => {
  document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.cookie = `refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
