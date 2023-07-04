import { Container } from "./styles"
import SectionMovies from "../../components/SectionMovies"
import { useEffect } from "react"
import { useState } from "react"
import { getTopMovies, getMoreMovies } from "../../services/getData"




function Movies () {
 // {topMovies && (<Slider info={topMovies} title={'Top Movies'}/>)}
   //   {movies && (<Slider info={movies} title={'Movies'}/>)}

    const [topMovies, setTopMovies] = useState()
    const [movies, setMovies] = useState()

    useEffect(() => {
      async function getMovies() {
        
            setTopMovies( await getTopMovies()) 
            setMovies( await getMoreMovies())

        }
      
     getMovies()
      
    }, [])
    
    //console.log(movies)

    return (

        <Container>
            
           
      {topMovies && (<SectionMovies info={topMovies} title={'Top Movies'}/>)}
      {movies && (<SectionMovies info={movies} title={'Movies'}/>)}
      
            
        </Container>
    )

}

export default Movies