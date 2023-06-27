import { Container } from "./styles"
import { getImages } from "../../utils/getImages"

function Cards ({item}) {
    return (

    <Container>
   
    <img src= {getImages(item.poster_path || item.profile_path || '')}/> 
    <h3>{item.title || item.name}</h3> 
   
    </Container>
    )
}
export default Cards