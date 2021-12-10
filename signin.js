let storage = window.localStorage
let users = getData("users") ?? [];

signInForm.addEventListener('submit', e => {
  e.preventDefault()

  let username = signInUsername.value.trim()
  let password = signInPassword.value.trim()

  let topilganUser = users.find(user => user.username == username && user.password == password);
  let xatoUser = users.find(user => user.password == password);
  let xatoPassword = users.find(user => user.username == username);

  if (topilganUser) {
    alert('User profilga kirildi')
  } else if (xatoUser) {
    alert('user xato')
  } else if (xatoPassword) {
    alert ("password xato")
  } else {
    alert ("Login yoki parol xato")
  }
  // if (topilganUser) {
  //   alert('User profilga kirildi')
  // } else {
  //   alert('Login yoki parol xato')
  // }
});