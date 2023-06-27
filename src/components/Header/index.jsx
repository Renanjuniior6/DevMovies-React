import Logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { Container, Menu, Li } from './styles'

function Header () {
    
    const {pathname} = useLocation()

    

    return (
        <Container>

            <img src={Logo} alt='logo-devmovies' /> 
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to='/' >Home</Link>
                </Li>
                <Li isActive={pathname.includes('filmes')}>
                    <Link to='/filmes' >Movies</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to='/series' >Series</Link>
                </Li>
            </Menu>

        </Container>
    )
}

export default Header