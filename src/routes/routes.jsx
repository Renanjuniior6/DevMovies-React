import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../Layout/DefaultLayout'
import DetailMovies from '../containers/DetailMovies'
import DetailSeries from '../containers/DetailSeries'


function Router () {
    return (
        <Routes>
            <Route element={ <DefaultLayout/> }> 
                <Route path='/' element={ <Home/> }/>
                <Route path='/filmes' element={ <Movies /> }/>
                <Route path='/series' element={ <Series /> }/>
                <Route path='/detalhefilmes/:id' element={ <DetailMovies /> }/>
                <Route path='/detalheseries/:id' element={ <DetailSeries /> }/>
            </Route>
        </Routes>
    )
}

export default Router 