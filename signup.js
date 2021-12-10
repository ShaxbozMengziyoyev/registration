//Sigin Up 
let storage = window.localStorage
let users = getData("users") ?? [];



signupForm.addEventListener('submit', e =>{
  e.preventDefault()
  let currentTime = Date.now()

  let username = signUpUsername.value.trim()
  let email = signUpEmail.value.trim()
  let password = signUpPassword.value.trim()

  let foundUser = users.find(item => item.email == email || item.username == username);

  if (!foundUser) {
    users.push({
      id: currentTime,
      username,
      email,
      password
    })
    alert('success')
  } else {
    alert('user exist')
  }
  
  // get function from
  saveData(users, "users")
})