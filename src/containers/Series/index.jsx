import { Container } from "./styles"
import SectionSeries from "../../components/SectionSeries"
import { useEffect } from "react"
import { useState } from "react"
import { getTopSeries, getPopularSeries } from "../../services/getData"




function Series () {
 
    const [topSeries, setTopSeries] = useState()
    const [series, setSeries] = useState()

    useEffect(() => {
      async function getMovies() {
        
            setTopSeries( await getTopSeries()) 
            setSeries( await getPopularSeries())

        }
      
     getMovies()
      
    }, [])
    
    

    return (

        <Container>
            
           
      {topSeries && (<SectionSeries info={topSeries}/>)}
      {series && (<SectionSeries info={series} />)}
      
            
        </Container>
    )

}

export default Series