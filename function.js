let saveData = (data, saveDataAs) => {
  window.localStorage.setItem(saveDataAs, JSON.stringify(data))
  
  return void (0)
}


let getData = (getDataAs) => {
  return JSON.parse(window.localStorage.getItem(getDataAs))
}