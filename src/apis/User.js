const user = (() => {
  const signup = async (username, password) => {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (response.status === 200) return null;
    const data = await response.json();
    return data.error;
  };

  return {
    signup,
  };
})();

export default user;
