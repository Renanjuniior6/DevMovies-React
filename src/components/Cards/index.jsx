import { Container } from "./styles"
import { getImages } from "../../utils/getImages"
import { useNavigate } from 'react-router-dom'

function Cards ({item, text}) {
    const navigate = useNavigate()

    function getId(id) {
        console.log(id)
        
      //  navigate(`/detalhe/${id}`)
    }

    return (

    <Container>
   
    <img onClick={() => getId(item.id)} src= {getImages(item.poster_path || item.profile_path || '')}/> 
    <h3>{ text ? item.title || item.name : '' }</h3> 
   
    </Container>
    )
}
export default Cards