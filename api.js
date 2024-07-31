const API_URL = 'https://desafio-react-back.onrender.com';

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  const json = await response.json();
  return json.token;
}

export async function getPosts() {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/post`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const json = await response.json();

  return json.data.posts;
}

export async function createAccount(
  profilePicture,
  firstName,
  lastName,
  birthDate,
  email,
  password
) {

  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      profilePicture,
      firstName,
      lastName,
      birthDate,
      email,
      password
    })
  });
  const json = await response.json();
  return json.user
}
