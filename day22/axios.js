const prompt = require('inquirer').createPromptModule()
const axios = require('axios')
const fs = require('fs')

const buildMoviePage = movies => {

}

prompt([
  {
    type: 'input',
    name: 'movieA',
    message: 'What is your favorite movie?'
  },
  {
    type: 'input',
    name: 'movieB',
    message: 'What is your second favorite movie?'
  },
  {
    type: 'input',
    name: 'movieC',
    message: 'What is your third favorite movie?'
  }
])
  .then(({ movieA, movieB, movieC }) => {
    console.log(movie)
    const movieTitles = [movieA, movieB, movieC]
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${movieA}`)
      .then(({ data: movieOne }) => {
        axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${movieB}`)
          .then(({ data: movieTwo }) => {
            axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${movieC}`)
              .then(({ data: movieThree }) => {
                buildMoviePage([movieOne, movieTwo, movieThree])
              })
          })
      })
  })
  .catch(e => console.error(e))

// axios.get('http://www.omdbapi.com/?apikey=trilogy&t=Goodfellas')
//   .then(({ data }) => {
//     console.log(data)
//   })
//   .catch(e => console.error(e))
