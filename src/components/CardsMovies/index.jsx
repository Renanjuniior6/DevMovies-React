import { Container } from "./styles"
import { getImages } from "../../utils/getImages"
import { useNavigate } from 'react-router-dom'

function CardsMovies ({item, text}) {
    const navigate = useNavigate()

    function getId(id) {
        
        navigate(`/detalhefilmes/${id}`)
        window.location.reload()
    }

    return (

    <Container>
   
    <img onClick={() => getId(item.id)} src= {getImages(item.poster_path || item.profile_path || '')}/> 
    <h3>{ text ? item.title || item.name : '' }</h3> 
   
    </Container>
    )
}
export default CardsMovies