import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/Home/Movies'
import Series from '../containers/Home/Series'
import DefaultLayout from '../Layout/DefaultLayout'


function Router () {
    return (
        <Routes>
           
            <Route path='/' element={ <Home/> }/>
            <Route path='/filmes' element={ <Movies /> }/>
            <Route path='/series' element={ <Series /> }/>
           
        </Routes>
    )
}

export default Router 