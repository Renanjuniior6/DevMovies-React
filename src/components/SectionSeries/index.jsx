import CardsSeries from "../CardsSeries"
import { Container, BoxCards } from "./styles"


function SectionSeries ({info}) {

    
    return (
        
    <>

    <Container> 
       

            {info.map((item, index) => (
                <BoxCards key={index}>

                    <CardsSeries item={item} text={false} />

                </BoxCards>
            ))}
            
      

    </Container>

    </>
    )
}
export default SectionSeries