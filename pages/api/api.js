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

// export function createAccount(newUser) {
//   return fetch (`${API_URL}/users`, {
//     method: 'POST',
//     header: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       profilePicture: newUser.profilePicture,
//       firstName: newUser.firstName,
//       email: newUser.email,
//       password: newUser.password,
//     })
//   });
// }
export function createAccount(userData) {
  return fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      profilePicture: userData.profilePicture,
      firstName: userData.firstName,
      email: userData.email,
      password: userData.password,
    })
  });
}
