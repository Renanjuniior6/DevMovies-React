import { getImages } from "../../utils/getImages"
import { Container, Title } from "./styles"

function Credits({ credits }) {
    console.log({ credits })
    return (

        <>
            <Title>Créditos</Title>
            {credits && (

                <Container>
                    {credits.slice(0,5).map( artists => (
                        <div key={artists.id}>
                            <img src={getImages(artists.profile_path)}/>
                            <p>{artists.original_name}</p>
                        </div>
                    ))}
                </Container>)}

        </>
    )
}
export default Credits