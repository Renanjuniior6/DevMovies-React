import { useEffect, useState } from "react"
import { Background, Container, Cover, Info } from "./styles"
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../services/getData"
import { useParams } from 'react-router-dom'
import { getImages } from "../../utils/getImages"


function Detail() {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [videos, setVideos] = useState()
    const [credits, setCredits] = useState()
    const [similar, setSimilar] = useState()

    useEffect(() => {

        async function getAllData() {

            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id),


            ]).then(([movie, videos, credits, similar]) => {

                setMovie(movie)
                setVideos(videos)
                setCredits(credits)
                setSimilar(similar)


            })

                .catch((error) => console.error(error))

        }
        getAllData()


    }, [])

    return (
        <>

          {movie && (
          <> 

          <Background image={getImages(movie.backdrop_path)} /> 

            <Container>
               <Cover>
                <img src={getImages(movie.poster_path)} /> 
               </Cover>
               <Info> 
                <h2>{movie.title}</h2>
                <div>Generos</div>
                <p>{movie.overview}</p>
                <div>Creditos</div>
               </Info>
            </Container>

          </> 
           )} 

        </>

    )
}
export default Detail