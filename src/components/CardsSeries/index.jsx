import { Container } from "./styles"
import { getImages } from "../../utils/getImages"
import { useNavigate } from 'react-router-dom'

function CardsSeries ({item, text, isShow}) {
    const navigate = useNavigate()

    function getId(id) {
        
        if(item) {
            navigate(`/detalheseries/${id}`)
       } 
    
        if (isShow) {
            navigate(`/detalheseries/${id}`)
            window.location.reload()
        }
    }

    return (

    <Container>
   
    <img onClick={() => getId(item.id)} src= {getImages(item.poster_path || item.profile_path || '')}/> 
    <h3>{ text ? item.title || item.name : '' }</h3> 
   
    </Container>
    )
}
export default CardsSeries