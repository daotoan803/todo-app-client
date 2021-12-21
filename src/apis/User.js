const user = (() => {
  const signup = async (username, password) => {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    return response;
  }


  return {
    signup
  }
})()

export default user;