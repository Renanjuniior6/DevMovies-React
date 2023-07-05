import { useEffect, useState } from "react"
import { Background, Container, Cover, Info, OverView } from "./styles"
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos} from "../../services/getData"
import { useParams } from 'react-router-dom'
import { getImages } from "../../utils/getImages"
import SpanGenres from "../../components/SpanGenre"
import Credits from "../../components/Credits"
import SliderMovies from '../../components/SliderMovies'
import { ContainerSimilar } from "../../components/Credits/styles"


function DetailMovies() {


    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [videos, setVideos] = useState()
    const [credits, setCredits] = useState()
    const [similar, setSimilar] = useState()


    //console.log(similar)

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
                <SpanGenres genres={movie.genres}/>
                <OverView>{movie.overview}</OverView>
                <div>
                    <Credits credits={credits}/>
                </div>
               </Info>
            </Container>

            <ContainerSimilar>
                {videos && videos.map( (video) => (
                    <div key={video.id}>
                        <h4>{video.name}</h4>
                        <iframe 

                        src={`https://www.youtube.com/embed/${video.key}`}
                        title="Youtube Video Plyer"
                        height="500px"
                        width="100%"> 
                            
                        </iframe>
                    </div>
                ))

                }
            </ContainerSimilar>
            { similar && <SliderMovies info={similar} title={'Similar Movies'} /> }

          </> 
           )} 

        </>

    )
}
export default DetailMovies