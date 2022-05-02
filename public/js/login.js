const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const username = document.querySelector('#username-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (username && email && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ username, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to sign up.');
//     }
//   }
// };

// document
//   .querySelector('.login-form')
//   .addEventListener('login', loginFormHandler);

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);

// const loginFormHandler = async function(event) {
//   event.preventDefault();

//   const usernameEl = document.querySelector('#email-input-login');
//   const passwordEl = document.querySelector('#password-input-login');

//   const response = await fetch('/api/user/login', {
//     method: 'POST',
//     body: JSON.stringify({
//       email: email.value,
//       password: password.value,
//     }),
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace('/dashboard');
//   } else {
//     alert('Failed to login');
//   }
// };

// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);
