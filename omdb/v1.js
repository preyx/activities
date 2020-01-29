// http://www.omdbapi.com/?t=Goodfellas&apikey=trilogy

// fetch('http://www.omdbapi.com/?t=Goodfellas&apikey=trilogy')
//   .then(r => r.json())
//   .then(movie => {
//     console.log(movie)
//   })
//   .catch(e => console.error(e))

// $.get('http://www.omdbapi.com/?t=Goodfellas&apikey=trilogy')
//   .then(movie => {
//     console.log(movie)
//   })
//   .catch(e => console.error(e))

const renderDisplay = x => {
  document.getElementById('mTitle').textContent = x.Title
  document.getElementById('mYear').textContent = x.Year
  document.getElementById('mPoster').src = x.Poster
}

fetch('http://www.omdbapi.com/?t=Goodfellas&apikey=trilogy')
  .then(r => r.json())
  .then(movie => {
    console.log(movie)
    renderDisplay(movie)
  })
  .catch(e => console.error(e))