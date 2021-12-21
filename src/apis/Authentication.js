import Cookies from 'js-cookie';

const authentication = (() => {
  let token = Cookies.get('token') ?? null;

  const sendAuthenticatedRequest = async (url, method = 'GET', data = {}) => {
    method = method.toUpperCase();
    const response = await fetch(url, {
      method,
      headers: {
        authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      ...(() => (method !== 'GET' ? { body: JSON.stringify(data) } : {}))(),
    });
    return response;
  };

  const login = async (username, password) => {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.status === 200) {
      Cookies.set('token', data.accessToken, { expires: 360 });
      token = data.accessToken;
    }
    return { statusCode: response.status, error: data.error ?? null };
  };

  const checkLoggedIn = async () => {
    if (!token) return false;
    const response = await sendAuthenticatedRequest(
      '/api/users/verifyToken',
      'POST'
    );

    if (response.status === 200) return true;
    Cookies.remove('token');
    return false;
  };

  const logout = () => {
    if (!token) return;
    Cookies.remove('token');
    token = null;
  };

  return { login, checkLoggedIn, logout, sendAuthenticatedRequest };
})();

export default authentication;
