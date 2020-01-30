const renderDisplay = x => {
  document.getElementById('astroCount').textContent = `There are ${x.length} people in space right now!`
  for (let i = 0; i < x.length; i++) {
    document.getElementById('astroList').innerHTML += `<li>${x[i].name} aboard the ${x[i].craft}.</li>`
  }
}

fetch('http://api.open-notify.org/astros.json')
  .then(r => r.json())
  .then(({people}) => {
    console.log(people)
    renderDisplay(people)
  })
  .catch(e => console.error(e))

// $.get("http://api.open-notify.org/astros.json")
// .then(({people}) => {
//   $(#astroCount).text(`There are ${x.length} people in space right now!`)
//   people.forEach(({name, craft}) => {
//     $(#astroList).append($(`<li>${name} aboard the ${craft}.</li>`))
//   })
// })