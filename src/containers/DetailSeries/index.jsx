import { useEffect, useState } from "react"
import { Background, Container, Cover, Info } from "./styles"
import { getSerieById, getSerieVideos, getSeriesCredits, getSeriesSimilar } from "../../services/getData"
import { useParams } from 'react-router-dom'
import { getImages } from "../../utils/getImages"
import SpanGenres from "../../components/SpanGenre"
import Credits from "../../components/Credits"
import Slider from '../../components/SliderMovies'
import { ContainerSimilar } from "../../components/Credits/styles"


function DetailSeries() {


    const { id } = useParams()


    const [serie, setSerie] = useState()
    const [serieVideos, setserieVideos] = useState()
    const [serieCredits, setserieCredits] = useState()
    const [serieSimilar, setserieSimilar] = useState()

    //console.log(similar)

    useEffect(() => {

        async function getAllData() {

            Promise.all([


                getSerieById(id),
                getSerieVideos(id),
                getSeriesCredits(id),
                getSeriesSimilar(id),


            ]).then(([ serie, serieVideos, serieCredits, seriesSimilar]) => {

                

                setSerie(serie)
                setserieVideos(serieVideos)
                setserieCredits(serieCredits)
                setserieSimilar(seriesSimilar)



            })

                .catch((error) => console.error(error))

                
               
        }
        getAllData()

        

    }, [])


    return (
        <>

          {serie && (
          <> 

          <Background image={getImages(serie.backdrop_path)} /> 

            <Container>
               <Cover>
                <img src={getImages(serie.poster_path)} /> 
               </Cover>
               <Info> 
                <h2>{serie.title}</h2>
                <SpanGenres genres={serie.genres}/>
                <p>{serie.overview}</p>
                <div>
                    <Credits credits={serieCredits}/>
                </div>
               </Info>
            </Container>

            <ContainerSimilar>
                {serieVideos && serieVideos.map( (video) => (
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
            { serieSimilar && <Slider info={serieSimilar} title={'Similar Series'} /> }

          </> 
           )} 

        </>

    )
}
export default DetailSeries