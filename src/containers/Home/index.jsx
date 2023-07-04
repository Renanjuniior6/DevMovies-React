import Button from '../../components/Button'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container, ContainerButtons, InputMovies, ButtonSearch, HelpBox } from './styles'
import SliderMovies from '../../components/SliderMovies'
import SliderSeries from '../../components/SliderSeries'
import Slider from '../../components/Slider'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal'
import { getMovies, getPopularSeries, getTopArtists, getTopMovies, getTopSeries, getMoreMovies } from '../../services/getData'



function Home() {
    const inputValue = useRef()
    const [showModal, setshowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [moreMovies, setMoreMovies] = useState()
    const [TopMovie, setTopMovie] = useState()
    const [TopSeries, setTopSeries] = useState()
    const [PopSeries, setPopSeries] = useState()
    const [Artist, setArtist] = useState()
    const navigate = useNavigate()

    

    function Seek() {
        if (moreMovies) {
            for (let i = 0; i < moreMovies.length; i++) {


                if(inputValue.current.value.toLowerCase() === moreMovies[i].title.toLowerCase()) {

                    
                   navigate(`/detalhefilmes/${moreMovies[i].id}`)
                    

                }  
            }
        }
        if (TopMovie) {
            for (let i = 0; i < TopMovie.length; i++) {


                if(inputValue.current.value.toLowerCase() === TopMovie[i].title.toLowerCase()) {

                    console.log('Funcionou!')
                   navigate(`/detalhefilmes/${TopMovie[i].id}`)
                    

                }  
            }
        } if (TopSeries) { 
            for (let i = 0; i < TopSeries.length; i++) {


                if(inputValue.current.value.toLowerCase() === TopSeries[i].name.toLowerCase()) {

                    console.log('Funcionou2!')
                   navigate(`/detalheseries/${TopSeries[i].id}`)
                }  
            }
        } if (PopSeries) { 
            for (let i = 0; i < PopSeries.length; i++) {


                if(inputValue.current.value.toLowerCase() === PopSeries[i].name.toLowerCase()) {

                    console.log('Funcionou3!')
                    navigate(`/detalheseries/${PopSeries[i].id}`)

                }  
            }
        }
        
       
          
           
            
           
    }

useEffect(() => {
    console.log(moreMovies)
 async function getAllData() {

       Promise.all([
        getMoreMovies(),
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopArtists()

       ]).then(([moreMovies, movie, topMovie, topSeries, popSeries, artist]) => {

        setMoreMovies(moreMovies)
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
                    <HelpBox> 
            <InputMovies ref={inputValue} placeholder='Buscar filmes e series..'/>
            <ButtonSearch red={false} onClick={Seek}>Buscar</ButtonSearch>
        </HelpBox>
                   { showModal && <Modal movieId={movie.id} setshowModal={setshowModal}/> } 
                   
                    <Container> 
                    
                    <Info>
                    <h1> {movie.title} </h1>
                    <p> {movie.overview} </p>
                    <ContainerButtons>
                        <Button red={true} onClick={() => navigate(`/detalhefilmes/${movie.id}`)} >Assista agora</Button>
                        <Button red={false} onClick={() => setshowModal(true)} >Assista ao trailer</Button>
                    </ContainerButtons>
                    </Info>
                    <Poster> 
                        <img alt='capa-do-filme' src={ getImages(movie.poster_path) }/> 
                    </Poster>
                    </Container>
                </Background>
            )}

              { TopMovie && <SliderMovies info={TopMovie} title={'Top Filmes'} /> } 
              { TopSeries && <SliderSeries info={TopSeries} title={'Top Series'} /> }
              { PopSeries && <SliderSeries info={PopSeries} title={'Popular Series'} /> }
              { Artist && <Slider info={Artist} title={'Popular Artists'} /> }       
        </>
    )

}

export default Home 