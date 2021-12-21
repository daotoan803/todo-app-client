import Cookies from 'js-cookie';

const authentication = (() => {
  let token = Cookies.get('token') ?? null;
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
      Cookies.set('hello', 'ehlllo');
      token = data.accessToken;
    }
    return { statusCode: response.status, error: data.error ?? null };
  };

  const checkLoggedIn = async () => {
    console.log(token);
    if (!token) return false;
    const response = await fetch('/api/users/verifyToken', {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) return true;
    Cookies.remove('token');
    return false;
  };

  const logout = () => {
    if (!token) return;
    token = null;
    Cookies.remove('token');
  };

  return { login, checkLoggedIn, logout };
})();

export default authentication;
