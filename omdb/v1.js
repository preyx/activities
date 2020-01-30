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

// const movieName = 'Spirited Away'
const sample = {
  Title: 'Spirited Away',
  Year: '2001',
  Rated: 'PG',
  Released: '28 Mar 2003',
  Runtime: '125 min',
  Genre: 'Animation, Adventure, Family, Fantasy, Mystery',
  Director: 'Hayao Miyazaki',
  Writer: 'Hayao Miyazaki',
  Actors: 'Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naitô',
  Plot:
    "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
  Language: 'Japanese',
  Country: 'Japan',
  Awards: 'Won 1 Oscar. Another 57 wins & 29 nominations.',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNmU5OTQ0OWQtOTY0OS00Yjg4LWE1NDYtNDRhYWMxYWY4OTMwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '8.6/10' },
    { Source: 'Rotten Tomatoes', Value: '97%' },
    { Source: 'Metacritic', Value: '96/100' }
  ],
  Metascore: '96',
  imdbRating: '8.6',
  imdbVotes: '584,489',
  imdbID: 'tt0245429',
  Type: 'movie',
  DVD: '15 Apr 2003',
  BoxOffice: '$9,855,615',
  Production: 'Walt Disney Pictures',
  Website: 'N/A',
  Response: 'True'
}

const renderDisplay = x => {
  document.getElementById('mTitle').textContent = x.Title
  document.getElementById('mYear').textContent = x.Year
  document.getElementById('mRate').textContent = x.Rated
  document.getElementById('mRun').textContent = x.Runtime
  document.getElementById('mPoster').src = x.Poster
  document.getElementById('mPoster').alt = x.Title
  document.getElementById('mPlot').textContent = x.Plot
  document.getElementById('mDir').textContent = x.Director
  document.getElementById('mWri').textContent = x.Writer
  document.getElementById('mAct').textContent = x.Actors
  x.Ratings.forEach(element => {
    switch (element.Source) {
      case 'Internet Movie Database':
        document.getElementById('mRateImdb').textContent = element.Value
        break
      case 'Rotten Tomatoes':
        document.getElementById('mRateRt').textContent = element.Value
        break
      case 'Metacritic':
        document.getElementById('mRateMc').textContent = element.Value
    }
  })
}

document.getElementById('mSearchBtn').addEventListener('click', (event) => {
  event.preventDefault()
  const mSearchVal = document.getElementById('mSearch').value
  document.getElementById('mSearch').value = ''
  fetch(`http://www.omdbapi.com/?t=${mSearchVal}&apikey=trilogy`)
    .then(r => r.json())
    .then(movie => {
      console.log(movie)
      if (movie.Response === 'True') {
        renderDisplay(movie)
      } else {
        UIkit.notification('Movie not found!', { pos: 'top-right', status: 'danger' })
      }
    })
    .catch(e => {
      console.error(e)
    })
})

renderDisplay(sample)
