import CardsMovies from "../CardsMovies"
import { Container, BoxCards } from "./styles"


function SectionMovies ({info}) {

    
    return (
        
    <>

    <Container> 
       

            {info.map((item, index) => (
                <BoxCards key={index}>

                    <CardsMovies item={item} text={false} />

                </BoxCards>
            ))}
            
      

    </Container>

    </>
    )
}
export default SectionMovies