import React from 'react'
import axios from 'axios'
const Movies = () => {
    const [movies, setMovies] = React.useState([])
    React.useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8a40c562ab0494e646d65c9e04990a51')
           .then(res => {
                setMovies(res.data)
            })
           .catch(err => {
                console.log(err)
            })
    }, [])


  return (
    <div>
      
    </div>
  )
}

export default Movies
