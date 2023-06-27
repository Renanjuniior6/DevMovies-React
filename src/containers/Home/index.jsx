import Button from '../../components/Button'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import Slider from '../../components/Slider'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal'
import { getMovies, getPopularSeries, getTopArtists, getTopMovies, getTopSeries } from '../../services/getData'



function Home() {
    const [showModal, setshowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [TopMovie, setTopMovie] = useState()
    const [TopSeries, setTopSeries] = useState()
    const [PopSeries, setPopSeries] = useState()
    const [Artist, setArtist] = useState()
    const navigate = useNavigate()


useEffect(() => {
      
 async function getAllData() {

       Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopArtists()

       ]).then(([movie, topMovie, topSeries, popSeries, artist]) => {

        setMovie(movie)
        setTopMovie(topMovie)
        setTopSeries(topSeries)
        setPopSeries(popSeries)
        setArtist(artist)

       })
       
         .catch((error) => console.error(error))

         }
         getAllData()

         /* console.time('time')
        setMovie( await getMovies())
        setTopMovie( await getTopMovies())
        setTopSeries( await getTopSeries())
        setPopSeries( await getPopularSeries())
        setArtist( await getTopArtists())
    console.timeEnd('time')
        }
    
     */

        }, []) 


     return (
        <>

            {movie && (

                <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>

                   { showModal && <Modal movieId={movie.id} setshowModal={setshowModal}/> } 

                    <Container> 
                    <Info>
                    <h1> {movie.title} </h1>
                    <p> {movie.overview} </p>
                    <ContainerButtons>
                        <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)} >Assista agora</Button>
                        <Button red={false} onClick={() => setshowModal(true)} >Assista ao trailer</Button>
                    </ContainerButtons>
                    </Info>
                    <Poster> 
                        <img alt='capa-do-filme' src={ getImages(movie.poster_path) }/> 
                    </Poster>
                    </Container>
                </Background>
            )}

              { TopMovie && <Slider info={TopMovie} title={'Top Filmes'} /> } 
              { TopSeries && <Slider info={TopSeries} title={'Top Series'} /> }
              { PopSeries && <Slider info={PopSeries} title={'Popular Series'} /> }
              { Artist && <Slider info={Artist} title={'Popular Artists'} /> }       
        </>
    )

}

export default Home 